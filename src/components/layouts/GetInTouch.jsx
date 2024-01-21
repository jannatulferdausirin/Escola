import Image from '../Image';
import Flex from '../Flex';
import getInTouchImage from '../../assets/Illustration.png';
import getInTouchImage1 from '../../assets/Group.png';
import getInTouchImage3 from '../../assets/Group (1).png';
import getInTouchImage2 from '../../assets/Group (2).png';
import getInTouchImage4 from '../../assets/Group (3).png';
import getInTouchImage5 from '../../assets/Jasmine logo.png';
import GetInTouchForm from '../GetInTouchForm';
import Container from '../Container';

const GetInTouch = () => {
    return (
      <Container className={`w-[1290px] my-40`}>
          <Flex className={`justify-between`}>
            <Image src={getInTouchImage } alt="get in touch image"/>
            <GetInTouchForm/>
        </Flex>
        <Flex className={`mt-24 justify-between gap-4`}>
            <Image src={getInTouchImage5} />
            <Image src={getInTouchImage1} />
            <Image src={getInTouchImage2} />
            <Image src={getInTouchImage3} />
            <Image src={getInTouchImage4} />
           
        </Flex>
      </Container>
    );
};

export default GetInTouch;