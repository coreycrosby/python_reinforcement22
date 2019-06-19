words = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]

for(let i = 0; i < words.length; i++) {
    if (words[i] == words[i].toLowerCase() & words[i].length > 4) {
        console.log('long and lowercase');
    }
    else if (words[i] == words[i].toLowerCase()) {
        console.log('lowercase');
    }
    else if (words[i].words > 4) {
        console.log('long');
    }
    else {
        console.log(`${words[i]}`);
    }
}

