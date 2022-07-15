import logo from '../assets/images/logo.png';
export default function About() {
   return (
     <main>
       <img src={logo} className="about-logo" alt="logo" />
       <div className="container">
            <h2>About Food Corner</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis leo eget lectus suscipit vehicula non nec risus. In hac habitasse platea dictumst. Nulla quis velit erat. Ut erat odio, scelerisque vel enim non, aliquam rhoncus augue. Vivamus tempor purus sed felis suscipit, in bibendum nisl facilisis. Nulla ultrices magna tincidunt justo convallis elementum. Vivamus mattis placerat odio in fermentum. Donec gravida nisl eu velit ultricies consequat. Aenean malesuada imperdiet varius.</p>
            <p>Vivamus rutrum, urna a pellentesque gravida, lorem metus egestas lacus, ut dapibus dui augue quis libero. Duis euismod, orci ac commodo aliquet, augue orci condimentum felis, id condimentum nibh nulla a eros. Nullam a lectus posuere ex euismod fermentum. Quisque dui neque, placerat ac eleifend sed, auctor sed arcu. Cras sodales quam massa, id facilisis dui gravida a. Aliquam eu quam purus. Morbi eget nibh arcu. Ut faucibus massa purus, vitae ornare leo varius non. Proin tempor diam in orci volutpat ultricies. Pellentesque mattis sed diam quis sodales. Vestibulum laoreet mattis nisi a malesuada. Etiam quis varius urna. Mauris sem metus, cursus ac hendrerit vitae, accumsan id ante. Vivamus efficitur porttitor leo, ultrices molestie est ultricies eget. Etiam aliquet aliquam ligula, in venenatis justo placerat ut. </p>
       </div>
     </main>
   );
 }