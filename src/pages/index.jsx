import { Wrapper } from "../layout";
import HomeMain from '../components/homes/home-2';
import SEO from "../components/seo";

export default function index() {
  
  return (
    <Wrapper>
      <SEO pageTitle={'Home Default'} />
      <HomeMain />
    </Wrapper>
  )
}
