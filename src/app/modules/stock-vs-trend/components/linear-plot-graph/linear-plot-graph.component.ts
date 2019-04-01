import { Component, OnInit, Input } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Shape from 'd3-shape';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import * as d3Array from 'd3-array';
import { Stock, MOCK_STOCKS, GoogleTrend } from 'src/app/shared/model/stocks';

@Component({
  selector: 'app-linear-plot-graph',
  templateUrl: './linear-plot-graph.component.html',
  styleUrls: ['./linear-plot-graph.component.scss']
})
export class LinearPlotGraphComponent implements OnInit {

  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private yLine: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  @Input() stockPriceHistory: Stock[];
  @Input() googleTrend: GoogleTrend[];

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawPlots();
  }

  private initSvg() {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }
  private initAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.yLine = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.stockPriceHistory, (d) => d.date));
    this.y.domain(d3Array.extent(this.stockPriceHistory, (d) => d.priceChange));
    this.yLine.domain(d3Array.extent(this.googleTrend, (d) => d.trendValue));
  }

  private drawAxis() {

    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    this.svg.append('g')
      .attr('class', 'axis axis--yLine')
      .call(d3Axis.axisRight(this.yLine))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');

    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');
  }

  private drawPlots() {
    this.line = d3Shape.line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.yLine(d.trendValue));

    this.svg.append('path')
      .datum(this.googleTrend)
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', '1.5px')
      .attr('d', this.line);

    this.svg.selectAll('dot')
      .data(this.stockPriceHistory)
      .enter().append('circle')
      .attr('r', 5)
      .attr('cx', (d: any) => this.x(d.date))
      .attr('cy', (d: any) => this.y(d.priceChange))
      .style('fill', (d: any) => d.priceChange < 0 ? 'red' : 'green');
  }

}
