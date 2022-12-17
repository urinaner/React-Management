import './App.css';
import Customer from './componets/Customer';

const customers = [{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '942910',
  'gender': '남자',
  'job': '대학생'

},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': '장영재',
  'birthday': '991027',
  'gender': '남자',
  'job': '대학생'

},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '장다연',
  'birthday': '040707',
  'gender': '여자',
  'job': '학생'

}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
