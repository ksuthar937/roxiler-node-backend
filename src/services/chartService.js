const givenRanges = {
  "0-100": 0,
  "101-200": 0,
  "201-300": 0,
  "301-400": 0,
  "401-500": 0,
  "501-600": 0,
  "601-700": 0,
  "701-800": 0,
  "801-900": 0,
  "901-above": 0,
};

const barChart = async (data) => {
  try {
    const ranges = { ...givenRanges };

    data.forEach((item) => {
      const price = item.price;
      if (price <= 100) {
        ranges["0-100"]++;
      } else if (price <= 200) {
        ranges["101-200"]++;
      } else if (price <= 300) {
        ranges["201-300"]++;
      } else if (price <= 400) {
        ranges["301-400"]++;
      } else if (price <= 500) {
        ranges["401-500"]++;
      } else if (price <= 600) {
        ranges["501-600"]++;
      } else if (price <= 700) {
        ranges["601-700"]++;
      } else if (price <= 800) {
        ranges["701-800"]++;
      } else if (price <= 900) {
        ranges["801-900"]++;
      } else {
        ranges["901-above"]++;
      }
    });
    return ranges;
  } catch (error) {
    throw error;
  }
};

const pieChart = async (data) => {
  try {
  } catch (error) {
    throw error;
  }
};

module.exports = { barChart, pieChart };
