export interface ThemeColors {
  blue: string;
}

export const colors: ThemeColors = {
  blue: "#0070f3",
};

export interface ThemeContainer {
  theme: Theme;
}

export interface Theme {
  link: {
    color: string;
  };
}

export const theme: Theme = {
  link: {
    color: colors.blue,
  },
};
