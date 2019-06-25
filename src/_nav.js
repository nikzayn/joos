export default {
  items: [
    {
      name: 'Dashboard',
      url: '/insights',
      icon: 'icon-speedometer'
    },
    {
      name: 'All Stores',
      url: '/acquistion',
      icon: 'icon-graph',
      children: [
        {
          name: 'Amazon Store',
          url: '/acquisition',
          icon: 'icon-graph',
          },
          {
          name: 'Flipkart Store',
          url: '/demographics',
          icon: 'icon-chart',
          },
          {
          name: 'Paytm Store',
          url: '/ecommerce',
          icon: 'icon-present',
         },
      ]
    },
     
      {
      name: 'Data (tabular)',
      url: '/monthlytable',
      icon: 'icon-calendar',
    },
    {
      name: 'Add a Store',
      url: '/weeklytable',
      icon: 'icon-calendar',
    },
    {
      name: 'Data Export',
      url: '/weeklytable',
      icon: 'icon-calendar',
    }
  ],
};
