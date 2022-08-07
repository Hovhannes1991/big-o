class HashTable {
  dataMap: any[];
  constructor(size = 10) {
    this.dataMap = new Array(size);
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  get(key: string) {
    const index = this.hash(key);
    if (!this.dataMap[index]) return undefined;
    let arr = this.dataMap[index];
    for (let i = 0; i < arr.length; i++) {
      let [currentKey, currentValue] = arr[i];
      if (key === currentKey) return currentValue;
    }
  }

  set(key: string, value: any) {
    const index = this.hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
}

let ht = new HashTable();
ht.set("name", "Hovhannes");
ht.set("age", "31");
ht.set("gender", "male");
ht.set("hair", "black");
ht.set("aaa", "888");
console.log(ht);

// console.log(ht.get('age'))


let arr1 = [12,34,56,78,34]
let arr2 = [14,33,53,784,500, 12]

function f(){
    let obj: {[index: string]: boolean} = {}
    arr1.forEach(i => obj[i] = true)
    let find = arr2.find(i => obj[i])
    console.log(find)
}

f()