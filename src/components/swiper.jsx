import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper";
import 'swiper/css/navigation';
import './swiper.css';



const Swipe = ({imgs, Swidth, Sheight, title, Theight, Twidth, Jc, Ai, Color, Bg}) => {
	const titles = title;
	const photos = imgs;
	return(
		<div>
			<Swiper modules={[Navigation]} navigation speed={800} slidesPerView={1} loop style={{width: Swidth, height: Sheight}}>
				
				{titles.map((title,i) => 
					<SwiperSlide>
						<div style={{width: Twidth, height: Theight, display: 'flex', justifyContent: Jc, alignItems: Ai, color: Color, background: Bg }}>{title}</div>
						{photos.map((photo,i) =>
							<img style={{width: '100%', height: '100%'}} src={photo.toString()} alt="" />
						)}
					</SwiperSlide>
				)}
			</Swiper>
		</div>
	)
}

export default Swipe;