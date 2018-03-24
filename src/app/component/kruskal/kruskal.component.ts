import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-kruskal',
  templateUrl: './kruskal.component.html',
  styleUrls: ['./kruskal.component.css']
})
export class KruskalComponent implements OnInit {
  edges = [
  ];
  nodes = [];
  mst = [];
  constructor() {
  }

  ngOnInit() {
  }

  addEdge(node1, node2, cost) {
    const edge = [node1.value, node2.value, cost.value];
    this.edges.push(edge);
    this.nodes = _.union(this.nodes, [edge[0], edge[1]]);
  }

  kruskal() {
    let forest = _.map(this.nodes, function (node) {
      return [node];
    });
    console.log(forest);
    const sortedEdges = _.sortBy(this.edges, function (edge) {
      return -edge[2];
    });
    console.log(sortedEdges);
    while (forest.length > 1) {
      const edge = sortedEdges.pop();
      const n1 = edge[0],
        n2 = edge[1];

      const t1 = _.filter(forest, function (tree) {
        return _.includes(tree, n1);
      });

      const t2 = _.filter(forest, function (tree) {
        return _.includes(tree, n2);
      });

      if (!_.isEqual(t1, t2)) {
        forest = _.without(forest, t1[0], t2[0]);
        forest.push(_.union(t1[0], t2[0]));
        this.mst.push(edge);
      }
    }
    console.log(this.mst);
  }
}
