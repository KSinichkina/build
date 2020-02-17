import * as React from 'react';
import { useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
// Importing geodata (map data)
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export type ChartData = {
      id: string,
      name: string,
      value: number,
};

interface Props {
    chartData: ChartData[];
}

const addColorToCountry = (item: ChartData) => ({...item, fill: am4core.color("#95cdff")})

const Chart = (props: Props) => {
  const chartRef = useRef<am4core.Optional<string | HTMLElement> | undefined>(undefined);

  useEffect(() => {
    const chart = am4core.create(chartRef.current, am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();
    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name} {value}";
    polygonTemplate.fill = am4core.color("#ddd");

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#00007F");

    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];

     // Add some data
     polygonSeries.data = props.chartData.map(addColorToCountry);


    // Bind "fill" property to "fill" key in data
    polygonTemplate.propertyFields.fill = "fill";

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);


    return (
      //@ts-ignore
      <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>
    );
  }

export default Chart;