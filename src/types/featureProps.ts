interface FeatureProps {
  id: number;
  featureName: string;
  plans: {
    id: number;
    planName: string;
    isIncluded: boolean;
  }[];
}
export default FeatureProps