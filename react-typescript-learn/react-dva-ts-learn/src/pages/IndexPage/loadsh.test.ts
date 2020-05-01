import { includes } from 'lodash';

const s1: any = {
  installRequire: {
    noCeiling: 'noCeiling',
  },
};

const s2: string[] = ['isCeiling', 'noCeiling', 'sunRoom'];

s2.map((item: string) => {
  if (includes(s1.installRequire, item)) {
    delete s1.installRequire[item];
  } else {
    s1.installRequire[item] = item;
  }
});

console.log(s1);

const s3 = {
  isCeiling: [],
  noCeiling: [],
  sunRoom: [],
};

const { noCeiling: current, ...rest } = s3;

console.log(current, Object.keys(rest));
