import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { AnimalModel, AnimalDocument } from './animals.schema';
import { AnimalDto } from './animals.dto';

@Injectable()
export class AnimalsService {
  private animals: AnimalModel[] = [
    {
      id: 1, type: 'dogs', name: 'sharik'
    }
  ]

  constructor(
    @InjectModel(AnimalModel.name) private animalModel: Model<AnimalDocument>,
  ) {}

  list(): Promise<AnimalModel[]> {
    return Promise.resolve(this.animals);
  }

  instance(id: number): Promise<AnimalModel> {
    return Promise.resolve(this.animals.find(item => item.id === id));
    // return this.animalModel.findOne({ id }).exec();
  }

  add(animal: AnimalDto): Promise<AnimalModel> {
    const createdAnimal = new this.animalModel(animal);

    return createdAnimal.save();
  }
}
