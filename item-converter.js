module.exports = (textInput) => {
    return textInput
        .split('\n')
        .map(line => {
            const metrics = line.match(/[-\d]+/g);
            if (metrics && metrics.length === 2) {
                const sellIn = +metrics[0];
                const quality = +metrics[1];
                return {
                    name: line.substring(0, line.indexOf(sellIn) - 1),
                    sellIn,
                    quality
                };
            }
        });  
};
