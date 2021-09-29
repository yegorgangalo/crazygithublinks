import * as reactIcons from 'react-icons/ai'

export type reactIcon = keyof typeof reactIcons

export interface IContributor {
    login: string;
}

export interface IPickerColor {
    hex: string;
}