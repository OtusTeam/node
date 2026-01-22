// ============================================
// 2. ВЛОЖЕННЫЕ NAMESPACES
// ============================================

namespace Shapes {
  // Вложенный namespace для 2D фигур
  export namespace TwoDimensional {
    export interface Point {
      x: number;
      y: number;
    }

    export class Circle {
      constructor(public center: Point, public radius: number) {}

      area(): number {
        return Math.PI * this.radius * this.radius;
      }

      perimeter(): number {
        return 2 * Math.PI * this.radius;
      }
    }

    export class Rectangle {
      constructor(public width: number, public height: number) {}

      area(): number {
        return this.width * this.height;
      }

      perimeter(): number {
        return 2 * (this.width + this.height);
      }
    }
  }

  // Вложенный namespace для 3D фигур
  export namespace ThreeDimensional {
    export interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    export class Sphere {
      constructor(public center: Point3D, public radius: number) {}

      volume(): number {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
      }

      surfaceArea(): number {
        return 4 * Math.PI * Math.pow(this.radius, 2);
      }
    }

    export class Cube {
      constructor(public sideLength: number) {}

      volume(): number {
        return Math.pow(this.sideLength, 3);
      }

      surfaceArea(): number {
        return 6 * Math.pow(this.sideLength, 2);
      }
    }
  }
}

// Использование вложенных namespaces
console.log("\n--- 2. Вложенные namespaces ---");

const circle = new Shapes.TwoDimensional.Circle({ x: 0, y: 0 }, 5);
console.log("2D Circle - Площадь:", circle.area().toFixed(2));
console.log("2D Circle - Периметр:", circle.perimeter().toFixed(2));

const rectangle = new Shapes.TwoDimensional.Rectangle(10, 5);
console.log("2D Rectangle - Площадь:", rectangle.area());
console.log("2D Rectangle - Периметр:", rectangle.perimeter());

const sphere = new Shapes.ThreeDimensional.Sphere({ x: 0, y: 0, z: 0 }, 5);
console.log("3D Sphere - Объём:", sphere.volume().toFixed(2));
console.log("3D Sphere - Площадь поверхности:", sphere.surfaceArea().toFixed(2));

const cube = new Shapes.ThreeDimensional.Cube(4);
console.log("3D Cube - Объём:", cube.volume());
console.log("3D Cube - Площадь поверхности:", cube.surfaceArea());

