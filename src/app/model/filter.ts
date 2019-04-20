import { Category } from './category';
import { Brand } from './brand';
import { Season } from './season';
import { Vendor } from './vendor';

export class Filter {
    constructor(

    public season: Season[],
    public vendor?: Vendor[],
    public brand?: Brand[],
    public category?: Category[]
    ) {}
    }
