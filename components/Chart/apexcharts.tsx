import dynamic from 'next/dynamic'
// import { Box, DefaultProps, useMantineTheme, Sx } from '@mantine/core'
import { Box, Typography } from '@mui/material'
import { ApexOptions } from 'apexcharts'
import { ReactNode } from 'react'
// import { LoaderOverlay } from '@/components/loader'
// import { useHash } from '@mantine/hooks'

/* client side components lazy loaders */
/* import ApexChart from 'react-apexcharts' */
const ApexChartReact = dynamic(
  () => import('react-apexcharts').then((mod) => mod),
  {
    ssr: false,
    loading: () => <Typography variant="caption">Loading</Typography>,
  }
)

function ChartApex(props: {
  type?: 'sparkline' | ''
  data?: any
  // sx: Sx[] | Sx
}): ReactNode {
  const itemChart: ApexOptions = {
    chart: {
      id: 'basic-sparkline',
      height: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 5,
        left: 7,
        blur: 6,
        opacity: 0.1,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
      ],
      labels: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    tooltip: {
      theme: 'dark',
    },
    stroke: {
      width: 5,
      curve: 'smooth',
    },
    series: [
      {
        name: 'Sales',
        data: [10, 3, 10, 9, 29, 19, 22, 9, 12, 2, 20],
      },
    ],
  }

  return (
    <Box
      sx={{
        '.apexcharts-tooltip': {
          background: '#f3f3f3',
          color: 'black',
          zIndex: 1040,
          '.apexcharts-tooltip-title': {
            padding: '.25rem 0 0 .5rem',
          },
        },
      }}
      // {...rest}
    >
      <ApexChartReact
        options={itemChart}
        series={itemChart.series}
        height="120"
      />
    </Box>
  )
}

function ChartApexArea(props: {
  type?: 'sparkline' | ''
  data?: any
  // sx: Sx[] | Sx
}): ReactNode {
  const itemAreas: ApexOptions = {
    chart: {
      id: 'basic-bar',
      height: 120,
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
      ],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    series: [
      {
        name: 'yearly',
        data: [30, 10, 45, 20, 49, 60, 50, 71, 55, 78, 62, 80],
      },
    ],
  }

  return (
    <Box
      sx={{
        '.apexcharts-tooltip': {
          background: '#f3f3f3',
          color: 'black',
          zIndex: 1040,
          '.apexcharts-tooltip-title': {
            padding: '.25rem 0 0 .5rem',
          },
        },
      }}
      // {...rest}
    >
      <ApexChartReact
        options={itemAreas}
        series={itemAreas.series}
        type="area"
        height="120"
        width="100%"
      />
      {/* <ApexChartReact
        options={itemGradient}
        series={itemGradient.series}
        id="basic-area"
        height="280"
      /> */}
      {/* <ApexChartReact options={testChart} series={testChart.series} height="140" /> */}
    </Box>
  )
}

function ChartApexBasicArea(props: {
  type?: 'sparkline' | ''
  data?: any
  // sx: Sx[] | Sx
}): ReactNode {
  const itemBasic: ApexOptions = {
    tooltip: {
      theme: 'dark',
      // style: {
      //   fontSize: '3rem',
      // },
    },
    chart: {
      id: 'basic-area',
      height: 120,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: { enabled: true },
      dropShadow: {
        enabled: !0,
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.12,
        color: '#0d6efd',
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      labels: { show: false },
    },
    xaxis: {
      labels: { show: false },
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan',
        '08 Jan',
        '09 Jan',
        '10 Jan',
        '11 Jan',
        '12 Jan',
      ],
    },
    series: [
      {
        name: 'Series 1',
        data: [45, 32, 38, 40, 20, 28, 20, 38, 22, 38, 42],
      },
    ],
  }

  return (
    <Box
      sx={{
        '.apexcharts-tooltip': {
          background: '#f3f3f3',
          color: 'black',
          zIndex: 1040,
          '.apexcharts-tooltip-title': {
            padding: '.25rem 0 0 .5rem',
          },
        },
      }}
      // {...rest}
    >
      <ApexChartReact
        options={itemBasic}
        series={itemBasic.series}
        id="basic-area"
        height="120"
      />
    </Box>
  )
}

function ChartApexBar(props: {
  type?: 'sparkline' | ''
  data?: any
  // sx: Sx[] | Sx
}): ReactNode {
  const options: ApexOptions = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: 'bar',
      height: 120,
      toolbar: {
        show: false,
      },
      sparkline: { enabled: true },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 5,
        left: 7,
        blur: 6,
        opacity: 0.1,
      },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 3,
        // endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
      // type: 'gradient',
      // gradient: {
      //   shade: 'dark',
      //   gradientToColors: ['#FDD835'],
      //   shadeIntensity: 1,
      //   type: 'horizontal',
      //   opacityFrom: 1,
      //   opacityTo: 1,
      //   stops: [0, 100, 100, 100],
      // },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands'
        },
      },
    },
  }
  return (
    <Box
      sx={{
        '.apexcharts-tooltip': {
          background: '#f3f3f3',
          color: 'black',
          zIndex: 1040,
          '.apexcharts-tooltip-title': {
            padding: '.25rem 0 0 .5rem',
          },
        },
      }}
      // {...rest}
    >
      <ApexChartReact
        // chart={itemPies.chart}
        // {...itemPies}
        // type="donut"
        type="bar"
        options={options}
        series={options.series}
        id="basic-pie"
        // width="100%"
        height="120"
      />
    </Box>
  )
}

function ChartApexDonut(props: {
  type?: 'sparkline' | ''
  data?: any
  // sx: Sx[] | Sx
}): ReactNode {
  const itemDonut: ApexOptions = {
    chart: {
      // height: 120,
      // height: '880',
      // id: 'basic-donut',
      // height: '280',
      type: 'donut',
      toolbar: {
        show: false,
      },
    },
    series: [44, 55, 41, 17, 15],
    // chart: {
    //   type: 'donut',
    // },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
  return (
    <Box
      sx={{
        '.apexcharts-tooltip': {
          background: '#f3f3f3',
          color: 'black',
          zIndex: 1040,
          '.apexcharts-tooltip-title': {
            padding: '.25rem 0 0 .5rem',
          },
        },
      }}
      // {...rest}
    >
      <ApexChartReact
        // chart={itemPies.chart}
        // {...itemPies}
        options={itemDonut}
        type="donut"
        series={itemDonut.series}
        id="basic-donut"
        // width="100%"
        height="580"
      />
    </Box>
  )
}

function ChartApexPie(props: {
  type?: 'sparkline' | ''
  data?: any
  // sx: Sx[] | Sx
}): ReactNode {
  const options: ApexOptions = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
      width: '100%',
      type: 'pie',
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    title: {
      text: 'Monochrome Pie',
    },
    dataLabels: {
      formatter(val: any, opts): any {
        const name = opts.w.globals.labels[opts.seriesIndex]
        return [name, val.toFixed(1) + '%']
      },
    },
    legend: {
      show: false,
    },
  }

  return (
    <Box
      sx={{
        '.apexcharts-tooltip': {
          background: '#f3f3f3',
          color: 'black',
          zIndex: 1040,
          '.apexcharts-tooltip-title': {
            padding: '.25rem 0 0 .5rem',
          },
        },
      }}
      // {...rest}
    >
      <ApexChartReact
        // chart={itemPies.chart}
        // {...itemPies}
        // type="donut"
        type="pie"
        options={options}
        series={options.series}
        id="basic-pie"
        width="100%"
        height="280"
      />
    </Box>
  )
}

function ChartApexGauge(props: {
  type?: 'sparkline' | ''
  data?: any
  // sx: Sx[] | Sx
}): ReactNode {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    series: [70],
    labels: ['Progress'],
  }
  return (
    <Box
      sx={{
        '.apexcharts-tooltip': {
          background: '#f3f3f3',
          color: 'black',
          zIndex: 1040,
          '.apexcharts-tooltip-title': {
            padding: '.25rem 0 0 .5rem',
          },
        },
      }}
      // {...rest}
    >
      <ApexChartReact
        // chart={itemPies.chart}
        // {...itemPies}
        // type="donut"
        type="radialBar"
        options={options}
        series={options.series}
        id="basic-radialBar"
        // width="100%"
        // height="120"
      />
    </Box>
  )
}

function ChartApexRadial(props: {
  type?: 'sparkline' | ''
  data?: any
  // sx: Sx[] | Sx
}): ReactNode {
  const options: ApexOptions = {
    series: [76, 67, 61, 90],
    chart: {
      height: 120,
      type: 'radialBar',
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
      show: true,
      floating: true,
      fontSize: '14px',
      position: 'right',
      offsetX: 170,
      offsetY: 5,
      labels: {
        useSeriesColors: true,
      },
      // markers: {
      //   size: 0,
      // },
      formatter: function (seriesName, opts) {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  }
  return (
    <Box
      sx={{
        '.apexcharts-tooltip': {
          background: '#f3f3f3',
          color: 'black',
          zIndex: 1040,
          '.apexcharts-tooltip-title': {
            padding: '.25rem 0 0 .5rem',
          },
        },
        // '.apexcharts-legend-text': {
        //   fontSize: '.18rem',
        // },
      }}
      // {...rest}
    >
      <ApexChartReact
        // chart={itemPies.chart}
        // {...itemPies}
        // type="donut"
        type="radialBar"
        options={options}
        series={options.series}
        id="basic-radialBar"
        // width="100%"
        // height="120"
      />
    </Box>
  )
}

export {
  ChartApex,
  ChartApexArea,
  ChartApexBasicArea,
  ChartApexDonut,
  ChartApexPie,
  ChartApexBar,
  ChartApexRadial,
  ChartApexGauge,
}
