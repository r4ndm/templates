import { Injectable } from '@angular/core';
import { IProduct } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private products: IProduct[] = [];
  constructor() {
    this.initProducts();
  }

  public getProductIds(): string[] {
    return this.products.map(product => product.id);
  }

  public getProduct(id: string): IProduct | undefined {
    return this.products.find(product => product.id === id);
  }

  public getProductImageUrl(id: string): string {
    const product = this.getProduct(id);
    return product ? `images/products/${product.image}` : '';
  }

  public getProducts(): IProduct[] {
    return this.products;
  }

  public getCategories(): string[] {
    return [...new Set(this.products.map(p => p.category)), 'All'];
  }

  public getProductsOfCategory(category: string): IProduct[] {
    return this.products.filter(p => category === 'All' || p.category === category);
  }

  private initProducts(): void {
    this.products = [
      {
        id: '1001',
        description: 'Design and operate your super lasers with this!',
        name: 'Empire 2000',
        image: 'build1.jpg',
        category: 'ARMoid',
        price: 14982.95,
        discount: 10,
        about:
          'This computer is so powerful that it is banned in most parts of the universe. Certified for installation in the Death Star, this computer is used to generate the superlaser! Featuring ARMoid chips, these computers are fast',
        componentsHighlights: ['ARMoid 6080x', 'Hyperdrive', 'Quantum bits', 'Superlaser'],
        components: [
          {
            name: 'CPU',
            model: 'ARMoid 6080x',
            specs: 'Too powerful!'
          },
          {
            name: 'GPU',
            model: 'NVidioid 400900x',
            specs: '9800fps at 210000p'
          },
          {
            name: 'Storage',
            model: 'BantaStore 5900',
            specs: 'All your data is belong to us!'
          }
        ],
        applications: 'Droid control units, death star class super laser control, clone management systems and many more...'
      },
      {
        id: '1002',
        description: 'Render the galaxy in 3D with this!',
        name: 'Rainbow One',
        image: 'build2.jpg',
        category: 'ARMoid',
        price: 12839.99,
        discount: 0,
        about: 'Use this for 3D rendering. Create images that will blow stormtrooper boots off their feet. Expensive but very gamey.',
        componentsHighlights: ['Big GPU', 'Lasers', 'Quantum bits'],
        components: [
          {
            name: 'CPU',
            model: 'ARMoid 6080x',
            specs: 'Too powerful!'
          },
          {
            name: 'GPU',
            model: 'NVidioid 99000x++',
            specs: '15 million fps at any resolution'
          },
          {
            name: 'Storage',
            model: 'Cloud Vault 5500',
            specs: 'It is very safe with backup'
          }
        ],
        applications: '3D and 4D rendering for creative and gaming purposes'
      },
      {
        id: '1003',
        description: 'Engage hyperdrive with this beast',
        name: 'Velocity max',
        image: 'build3.jpg',
        category: 'ARMoid',
        price: 5525.99,
        discount: 0,
        about: "So cheap that you cannot not buy it, even if you don't want it. Just get one and worry about uses later. So cheap!",
        componentsHighlights: ['Lightspeed speed RAM', 'Super precision', 'Quantum bits'],
        components: [
          {
            name: 'CPU',
            model: 'ARMoid 6080x',
            specs: 'Too powerful!'
          },
          {
            name: 'RAM',
            model: 'Lightspeed 9000',
            specs: 'CAS latency 1e-15000s'
          },
          {
            name: 'Storage',
            model: 'Cloud Vault 5500',
            specs: 'It is very safe with backup'
          }
        ],
        applications: 'Vector, speed and precision calculations'
      },
      {
        id: '1004',
        description: 'Portable enough to carry in hover bike',
        name: 'Speedster 100',
        image: 'build4.jpg',
        category: 'INTELoid',
        price: 8465.99,
        discount: 0,
        about: 'Power without the bulk. Very easy to transport. Bring computer along on every trip. Approved for use in transporters.',
        componentsHighlights: ['Light components', 'Featherweight calculations', 'Superfast'],
        components: [
          {
            name: 'CPU',
            model: 'ARMoid 6080-lx',
            specs: 'Too powerful but 0g weight!'
          },
          {
            name: 'RAM',
            model: 'None',
            specs: 'Removed due to weight'
          },
          {
            name: 'Storage',
            model: 'None',
            specs: 'Not needed'
          }
        ],
        applications: 'For surveillance and covert operations in the field'
      },
      {
        id: '1005',
        description: 'A computer with personality',
        name: 'R5X22',
        image: 'build5.jpg',
        category: 'INTELoid',
        price: 12987.99,
        discount: 20,
        about:
          'Very beautiful. Dream of your favorite star as you stare at it. Looks good in the background for meetings. Free monitor and keyboard with purchase.',
        componentsHighlights: ['Round components', 'Super materials', 'Superfast'],
        components: [
          {
            name: 'CPU',
            model: 'ARMoid 8088-round',
            specs: 'Very round'
          },
          {
            name: 'RAM',
            model: 'Zipfast 1288',
            specs: 'Many GBs'
          },
          {
            name: 'Storage',
            model: 'Cloud Vault 5500',
            specs: 'It is very safe with backup'
          }
        ],
        applications: 'Mostly for show but can do some things'
      },
      {
        id: '1006',
        description: 'Every Storm trooper should have one',
        name: 'Trooper',
        image: 'build6.jpg',
        category: 'AMDoid',
        price: 9765.99,
        discount: 15,
        about: 'Special storm trooper case and components. Built rugged and strong just like you. Free storm trooper helmet with purchase.',
        componentsHighlights: ['White coloring', 'Super materials', 'Superfast'],
        components: [
          {
            name: 'CPU',
            model: 'ARMoid 8088',
            specs: 'Also white color'
          },
          {
            name: 'RAM',
            model: 'Blazer 5500',
            specs: 'Many GBs'
          },
          {
            name: 'Storage',
            model: 'BantaStore 4500',
            specs: 'Can do storage things'
          }
        ],
        applications: "When you're a trooper and want to show it off"
      },
      {
        id: '1007',
        description: 'Recommended for the generals',
        name: 'Trooper v2',
        image: 'build7.jpg',
        category: 'AMDoid',
        price: 19233.99,
        discount: 0,
        about:
          "Like Trooper v1 but better. You're a general now and cannot be seen with the same computer as the troopers. This gives you that extra prestige you need to command your troops.",
        componentsHighlights: ['High price', 'Shiny and some color', 'Latest design', 'Limited edition'],
        components: [
          {
            name: 'CPU',
            model: 'ARMoid 8088',
            specs: 'Also white color'
          },
          {
            name: 'RAM',
            model: 'Blazer 5500',
            specs: 'Many GBs'
          },
          {
            name: 'Storage',
            model: 'BantaStore 4500',
            specs: 'Can do storage things'
          }
        ],
        applications: "Mostly for posing but can do some stuff"
      }
    ];
  }
}
