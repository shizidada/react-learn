import { Dispatch } from 'redux';
import { connect } from 'dva';

import { GlobalState } from '../../typings';
import { NAMESPACE } from '../../models/home/constants';
import { getCounterState } from '../../models/home';
import Counter from '../../components/Counter';

const mapStateToProps = (state: GlobalState) => getCounterState(state);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add(record: object) {
    dispatch({ type: `${NAMESPACE}/add`, payload: record });
  },
  minus(record: object) {
    dispatch({ type: `${NAMESPACE}/minus`, payload: record });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
