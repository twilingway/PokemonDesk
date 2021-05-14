type TypeConcat = (str1: string, str2: string) => string;

const concat: TypeConcat = (str1, str2) => str1 + str2;

interface IMyHometask {
  howIDoIt: string;
  someArray: (string | number)[];
  withData?: IMyHometask[];
}

const myHometask: IMyHometask = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', someArray: ['string one', 23] }],
};

interface IMyArray<T> {
  [N: number]: T;
  map<U>(fn: (el: T) => U): U[];
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initValue: U): U;
}

const myArray: IMyArray<number> = [1, 2, 3, 4];
myArray.map((i) => i + 1);

const arr = myArray.reduce((sum, current) => sum + current, 0);

concat(myHometask.howIDoIt, arr.toString());
