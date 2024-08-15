import {
  ResponsiveIcon,
  BoostExposureIcon,
  CustomDomainIcon,
  DragAndDropIcon,
  EmbedIcon,
  NoLimitIcon,
} from "../../public/assets/features/desktop";

const featuresData = [
  {
    id: 1,
    title: "100% Responsive",
    desc: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    icon: ResponsiveIcon,
  },
  {
    id: 2,
    title: "No Photo Upload Limit",
    desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    icon: NoLimitIcon,
  },
  {
    id: 3,
    title: "Available to Embed",
    desc: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    icon: EmbedIcon,
  },
  {
    id: 4,
    title: "Custom Domain",
    desc: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    icon: CustomDomainIcon,
  },
  {
    id: 5,
    title: "Boost Your Exposure",
    desc: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    icon: BoostExposureIcon,
  },
  {
    id: 6,
    title: "Drag & Drop Image",
    desc: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    icon: DragAndDropIcon,
  },
];

export default featuresData;
