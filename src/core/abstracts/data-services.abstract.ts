import { Address } from "../entities/address.entity";
import { Category } from "../entities/category.entity";
import { Company } from "../entities/company.entity";
import { Discount } from "../entities/discount.entity";
import { Image } from "../entities/image.entity";
import { Product } from "../entities/product.entity";
import { Review } from "../entities/review.entity";
import { RootGroup } from "../entities/root_group.entity";
import { SubCategory } from "../entities/subcategory.entity";
import { User } from "../entities/user.entity";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
    
    abstract address: IGenericRepository<Address>;

    abstract category: IGenericRepository<Category>;

    abstract company: IGenericRepository<Company>;

    abstract discount: IGenericRepository<Discount>;

    abstract image : IGenericRepository<Image>;

    abstract product : IGenericRepository<Product>;

    abstract review: IGenericRepository<Review>;

    abstract root_group: IGenericRepository<RootGroup>;

    abstract sub_category : IGenericRepository<SubCategory>;

    abstract user: IGenericRepository<User>;

}