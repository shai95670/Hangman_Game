import './drawing.css';

const Drawing = ({ bodyParts }) => {

    return (
       <div className='wrapper m-auto'>
            {
              bodyParts.map((bodyPart, index) => <div class={bodyPart} key={index}></div>)  
            }
       </div> 
    );
}
  
export default Drawing;
  