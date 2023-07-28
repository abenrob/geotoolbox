module.exports = {
    // preset: "rollup-jest",
    transform: {
      // "^.+\\.(js|jsx)$": "rollup-jest",
      "\\.m?js$": ["rollup-jest", {"output": {"sourcemap": true}}]
    },
    setupFilesAfterEnv: ["./testing/setup.js"],
    transformIgnorePatterns: [                                                                            
      '/node_modules/(?!d3-(geo|array)|internmap)',                                                      
    ]
};