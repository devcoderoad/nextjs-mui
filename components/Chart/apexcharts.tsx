import dynamic from 'next/dynamic'
// import { Box, DefaultProps, useMantineTheme, Sx } from '@mantine/core'
import { Box } from '@mui/material'
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
    loading: () => <>Loading</>,
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
      ],
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
        data: [10, 3, 10, 9, 29, 19, 22, 9, 12],
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
        height="140"
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
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
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
        width="630"
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
    chart: {
      id: 'basic-area',
      height: 280,
      type: 'area',
      toolbar: {
        show: false,
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
    xaxis: {
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan',
      ],
    },
    series: [
      {
        name: 'Series 1',
        data: [45, 52, 38, 45, 19, 23, 2],
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
        height="280"
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
      // height: 180,
      // id: 'basic-donut',
      // type: 'donut',
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
        height="280"
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
        height="310"
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
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
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
        height="310"
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
      height: 390,
      type: 'radialBar',
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
      position: 'left',
      offsetX: 160,
      offsetY: 15,
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
        height="310"
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
}
