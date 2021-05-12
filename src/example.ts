type TypeConcat = (str1: string, str2: string) => string;

const concat: TypeConcat = (str1, str2) => str1 + str2;

interface IMyHometask {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: [
    {
      howIDoIt: string;
      simeArray: (string | number)[];
    },
  ];
}

const myHometask: IMyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface IMyArray<T> {
  [N: number]: T;
  map<U>(fn: (el: T) => U): U[];
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
}

const myArray: IMyArray<number> = [1, 2, 3, 4];
myArray.map((i) => i + 1);

const arr = myArray.reduce((sum, current) => sum + current);

concat(myHometask.howIDoIt, arr.toString());
