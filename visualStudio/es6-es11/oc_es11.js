{
  const worker1 = {
    name: "scott",
    job: {
      title: "Front Engineer",
      manager: {
        name: "King",
      },
    },
  };

  const worker2 = {
    name: "king",
  };
  {
    function print(worker) {
      console.log(worker);
    }

    print(worker1);
    print(worker2);
  }

  //추천
  {
    function print(worker) {
      console.log(worker.job?.manager?.name);
    }

    print(worker1);
    print(worker2);
  }
}
