class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = null;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var array2sort = [];


    for (var i = 0; i < indices.length; i++) {
		array2sort.push(this.array[indices[i]]);
    }

    if (this.compareFunction == null) {
    var a,b;
      array2sort = array2sort.sort(function compare_numbers(a, b) {
		return Math.sign(a - b);
        });


      indices = indices.sort(function compare_numbers(a, b) {
		  // return Math.sign(a - b);
		  // trying another way of compare
			if (a === b) { return 0; }
			return a < b ? -1 : 1;
        });


      for (var i = 0; i < indices.length; i++) {

        this.array[indices[i]] = array2sort[i];

      }
      array2sort.length = 0;
      return this.array;

    } else {

      array2sort = array2sort.sort(this.compareFunction);
      indices = indices.sort();
      for (var i = 0; i < indices.length; i++) {
        this.array[indices[i]] = array2sort[i];
      }
  
      return this.array;
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}


module.exports = Sorter;