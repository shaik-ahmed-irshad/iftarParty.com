import loading from './Loading.gif'

export default function Loading(){
    return (
      <center>
        <img src={loading} style={{ width: "200px" }} alt="Loading.. " />
      </center>
    );
}