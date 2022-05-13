/** @jsxImportSource theme-ui */
import React from "react";
import "./App.css";
import { Button, Flex, ThemeProvider } from "theme-ui";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div
                    sx={{
                        width: "100%",
                        maxWidth: "1200px",
                        m: "0 auto",
                        padding: "0 20px",
                    }}
                >
                    <h1>Design system with Theme-ui</h1>
                    <Flex sx={{ py: 5 }}>
                        <Button variant="filled" sx={{ flexBasis: 3 }}>
                            Filled button
                        </Button>
                        <Button variant="outlined" sx={{ flexBasis: 2 }}>
                            Outlined button
                        </Button>
                        <Button variant="elevated" sx={{ flexBasis: 1 }}>
                            Elevated button
                        </Button>
                        <Button variant="textBtn" sx={{ flexBasis: 2 }}>
                            Text button
                        </Button>
                        <Button variant="disabled" sx={{ flexBasis: 3 }}>
                            Disabled button
                        </Button>
                    </Flex>
                    <Flex>
                        <div sx={{ px: 5, py: 3, bg: "error", flexBasis: 3 }}>
                            1
                        </div>
                        <div sx={{ px: 5, py: 3, bg: "salmon", flexBasis: 3 }}>
                            2
                        </div>
                        <div sx={{ px: 5, py: 3, bg: "orange", flexBasis: 3 }}>
                            3
                        </div>
                    </Flex>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
