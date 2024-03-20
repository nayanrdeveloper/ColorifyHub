export interface IGradients {
    gradients: IGradient[];
    page: number;
    loading: boolean;
}

export interface IGradient {
    _id: string;
    gradientColor: string;
}
