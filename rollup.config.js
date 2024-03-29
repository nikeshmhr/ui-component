import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';


const packageJson = require("./package.json");

export default {
    input: "src/index.js",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        }, {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }, {
            file: packageJson.browser,
            format: "umd",
            sourcemap: true,
            name: "hlexpertsUI"
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        image(),
        babel(
            {babelHelpers: 'bundled'}
        ),
        commonjs(),
        postcss(
            {extensions: ['.css']}
        )
    ]
};
