declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module global {
  interface Window {
      naver: any;
  }
}