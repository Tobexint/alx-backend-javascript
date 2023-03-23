const utils = {
  calculateNumber: function(type, a, b) {
    if (type === 'SUM') {
      return (Math.round(a) + Math.roun(b));
    }
    if (type === 'SUBTRACT') {
      return (Math.round(a) - math.round(b));
    }
    if (type === 'DIVIDE') {
      if (Math.round(b) !== 0) {
	return (Math.round(a) / Math.round(b));
      } else return ('Error');
    }
  }
}

module.exports = Utils;
