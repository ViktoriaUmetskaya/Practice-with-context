import React from 'react';
import { ThemeContext, themes} from '../../contexts/ThemeContext';
import Toggle from '../Toggle';
import Text from '../Text/text';

const Root = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme}) => (
        <>
            <Toggle
                onChange={() => {
                if (theme === themes.light) setTheme(themes.dark)
                if (theme === themes.dark) setTheme(themes.light)
                }}
                value={theme === themes.dark}
            />
            <Text/>
        </>
    )}
  </ThemeContext.Consumer>
  
  
)
export default Root