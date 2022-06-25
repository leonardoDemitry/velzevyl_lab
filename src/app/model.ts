import { ReactNode } from 'react';

export type ChartPoint = { x: number, y: number }

export type ChartRange = { start: number, end: number };

export type ChartElement = { x: number | ChartRange, y: number | ChartRange, element: ReactNode };

export type ChartElements = ChartElement[];
