export interface IPalette {
    page: number;
    loading: boolean;
    palettes: IPaletteItem[];
}

export interface IPaletteItem {
    _id: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
}
