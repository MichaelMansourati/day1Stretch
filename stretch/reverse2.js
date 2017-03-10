var args = process.argv.slice(2);
//console.log(args);

function reverseString(arg) {
  var finalArray = []
  var indArgSplit = arg.split('');
  for (h = indArgSplit.length - 1; h >= 0; h--) {
      finalArray.push(indArgSplit[h]);
    }
  console.log(finalArray.join(""));
}

for (i = 0; i < args.length; i++) {
  reverseString(args[i]);
}