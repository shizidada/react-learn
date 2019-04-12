import { combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import { ajax } from "rxjs/observable/dom/ajax";

import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";

import {
  FETCH_WHISKIES,
  fetchWhiskiesFailure,
  fetchWhiskiesSuccess
} from "../actions";

// const url = "https://evening-citadel-85778.herokuapp.com/whiskey/"; // The API for the whiskies
const url = "https://evening-citadel-85778.herokuapp.com/whiskey/";

const fetchWhiskiesEpic = (action$, state$) =>
  action$
    .ofType(FETCH_WHISKIES)
    .mergeMap(
      action =>
        ajax
          .getJSON(url)
          .map(response => response.results)
          .map(whiskys =>
            whiskys.map(whisky => ({
              id: whisky.id,
              title: whisky.title,
              imageUrl: whisky.detail_img_url || "https://res.cloudinary.com/dt4sawqjx/image/upload/v1463689031/svvy1bedm7twouzmdd3n.jpg"
            }))
          )
          .map(whiskies => {
            console.log(whiskies);
            return fetchWhiskiesSuccess(whiskies);
          })

      // console.log(action$, state$);
      // console.log(action);
      // console.log(results);
      // return fetchWhiskiesSuccess(results);
    )
    .catch(error => {
      console.log(error);
      return Observable.of(fetchWhiskiesFailure(error.message));
    });

export const rootEpic = combineEpics(fetchWhiskiesEpic);

/*
    The API returns the data in the following format:
    {
        "count": number,
        "next": "url to next page",
        "previous": "url to previous page",
        "results: array of whiskies
    }
    since we are only interested in the results array we will have to use map on our observable
 */

// const fetchWhiskiesEpic = (action$, state$) => {
//   // action$ is a stream of actions
//   // action$.ofType is the outer Observable
//   console.log(action$, state$);
//   return (
//     action$
//       // ofType(FETCH_WHISKIES) is just a simpler version of .filter(x => x.type === FETCH_WHISKIES)
//       .ofType(FETCH_WHISKIES)

//       // 在switchMap一个包装此代码借此观察到的，内可观测的流合并到调用可观察到的数据流 switchMap。
//       // 如果另一个威士忌提取请求通过，则此操作将再次重复，之前的结果将被丢弃，这要归功于 switchMap。
//       .flatMap(action => {
//         /*
//           const url = "https://evening-citadel-85778.herokuapp.com/whiskey/?format=json";
//           ajax.get(url).subscribe((data) => { console.log(data); });
//             // .map(res => console.log(res))
//          */
//         // ajax calls from Observable return observables. This is how we generate the inner Observable
//         return Observable.from(ajax.get(url))
//           .map(response => {
//             const { type, payload, error, meta } = action;
//             console.log(response);
//           })
//           .map(whiskies => fetchWhiskiesSuccess(whiskies))
//           .catch(error => {
//             return Observable.of(fetchWhiskiesFailure(error.message));
//           });

//         // return (
//         //   // ajax.getJSON(url)返回一个Observable
//         //   // getJSON simply sends a GET request with Content-Type application/json
//         //   ajax
//         //     .getJSON(url)
//         //     .map(data => {
//         //       console.log(data);
//         //       return data.results;
//         //     }) // get the data and extract only the results
//         //     .map(whiskies =>
//         //       whiskies.map(whisky => ({
//         //         id: whisky.id,
//         //         title: "whisky.title",
//         //         imageUrl: whisky.img_url
//         //       }))
//         //     )
//         //     // we need to iterate over the whiskies and get only the properties we need
//         //     // filter out whiskies without image URLs (for convenience only)
//         //     // 获取Observable中的数组并返回带有已过滤数组的新Observable。
//         //     .map(whiskies => whiskies.filter(whisky => !!whisky.imageUrl))
//         // );
//         // at the end our inner Observable has a stream of an array of whisky objects which will be merged into the outer Observable
//       })
//     // 只需获取我们添加到流中的这个新值，并将其映射到FETCH_WHISKIES_SUCCESS类型的操作，该操作将在从Epic返回Observable后调度。
//     // map the resulting array to an action of type FETCH_WHISKIES_SUCCESS
//     // .map(whiskies => fetchWhiskiesSuccess(whiskies))

//     // every action that is contained in the stream returned from the epic is dispatched to Redux, this is why we map the actions to streams.
//     // if an error occurs, create an Observable of the action to be dispatched on error. Unlike other operators, catch does not explicitly return an Observable.
//     // 捕获可能发生的任何错误，只返回一个Observable
//     // .catch(error => Observable.of(fetchWhiskiesFailure(error.message)))
//   );
// };

/* export const AuthEpic = action$ => {
  return action$.ofType(USER_CHECK).flatMap(action => {
    return Observable.from(HttpRequest.get("member/account/check"))
      .map(response => {
        const { type, payload, error, meta } = action;

        return {
          type: flag,
          data,
          meta: { pathName }
        };
      })
      .catch(error => {
        return Observable.of({ type: FETCH_ERROR, error });
      });
  });
}; */
