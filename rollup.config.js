import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default ["web", "runner"].map(target => ({
  plugins: [nodeResolve(), typescript()],
  input: `src/${target}.ts`,
  output: {
    plugins: [terser()],
    dir: "dist",
    format: "iife",
    name: "plugin",
    sourcemap: true,
  },
}));
