class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
    console.log(this.points);
  }
  addPoint(point) {
    this.points.push(point);
  }
  addSegment(seg){
    this.segments.push(seg);

  }
  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }

    return false;
  }

  containsPoint(poins) {
    return this.points.find((p) => p.equals(poins));
  }
  draw(ctx) {
    // draw the points and the segments (10,20) to (30,40) 2 points one
    // segment
    for (const seg of this.segments) {
      
      seg.draw(ctx);
    }
    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}
