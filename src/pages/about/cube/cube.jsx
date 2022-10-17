import Cube from "react-3d-cube";

export default function LogoCube() {
  return (
    <div class="my-[120px]">
      <center>
        <div
          style={{
            width: 200,
            height: 200,
          }}
        >
          <Cube size={200} index="front">
            <div style={{cursor: "grab"}}>
              <img src="https://cdn.sanity.io/images/0vv8moc6/dvm360/0efdfab43ab36c3432ced2ceb2d52daae6a93c96-500x500.jpg" alt="cube-1" />
            </div>
            <div style={{cursor: "grab"}}>
              <img src="https://cdn.sanity.io/images/0vv8moc6/dvm360/0efdfab43ab36c3432ced2ceb2d52daae6a93c96-500x500.jpg" alt="cube-2" />
            </div>
            <div style={{cursor: "grab"}}>
              <img src="https://cdn.sanity.io/images/0vv8moc6/dvm360/0efdfab43ab36c3432ced2ceb2d52daae6a93c96-500x500.jpg" alt="cube-3" />
            </div>
            <div style={{cursor: "grab"}}>
              <img src="https://cdn.sanity.io/images/0vv8moc6/dvm360/0efdfab43ab36c3432ced2ceb2d52daae6a93c96-500x500.jpg" alt="cube-4" />
            </div>
            <div style={{cursor: "grab"}}>
              <img src="https://cdn.sanity.io/images/0vv8moc6/dvm360/0efdfab43ab36c3432ced2ceb2d52daae6a93c96-500x500.jpg" alt="cube-5" />
            </div>
            <div style={{cursor: "grab"}}>
              <img src="https://cdn.sanity.io/images/0vv8moc6/dvm360/0efdfab43ab36c3432ced2ceb2d52daae6a93c96-500x500.jpg" alt="cube-6" />
            </div>
          </Cube>
        </div>
      </center>
    </div>
  );
}
