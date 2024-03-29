function useState() {
  let state = 0;

  function setCount(newCount) {
    state = newCount;
  }

  function count() {
    return state;
  }

  return [count, setCount];
}

function Counter() {
  const [count, setCount] = useState(0);

  return {
    click: () => setCount(count() + 1),
    render: () => console.log("render:", { count: count() }),
  };
}

const C = Counter();

C.render();
C.click();
C.render();

console.log("----------------------");

const MyReact = (function () {
  let hooks = [];
  let currentHook = 0;

  return {
    render(Component) {
      const C = Component();
      C.render();
      currentHook = 0;
      return C;
    },
    useEffect(callback, dependencies) {
      const _dependencies = hooks[currentHook];

      const isDependenciesChanged = () =>
        _dependencies
          ? dependencies.some((item, index) => {
              return item !== _dependencies[index];
            })
          : true;

      if (!_dependencies || isDependenciesChanged()) {
        callback();
        hooks[currentHook] = dependencies;
      }

      currentHook++;
    },
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue;
      const setStateHookIndex = currentHook; // for setState's closure

      function setState(newState) {
        hooks[setStateHookIndex] = newState;
      }

      return [hooks[currentHook++], setState];
    },
    useRef(initialValue) {
      hooks[currentHook] = hooks[currentHook] ||
        initialValue || { current: null };

      return hooks[currentHook++];
    },
  };
})();

function Counter2() {
  const [count, setCount] = MyReact.useState(0);
  const [text, setText] = MyReact.useState("test");
  const elementRef = MyReact.useRef();

  MyReact.useEffect(() => {
    console.log("effect: count changed", count);

    if (elementRef.current) {
      elementRef.current.data = "test";
    }
  }, [count]);

  MyReact.useEffect(() => {
    console.log("effect: text changed", text);
  }, [text]);

  MyReact.useEffect(() => {
    console.log("effect: ref changed");
  }, [elementRef]);

  return {
    click: () => setCount(count + 1),
    type: (text) => setText(text),
    noop: () => setCount(count),
    render: () => {
      elementRef.current = { ...elementRef.current, toString: () => "<br />" };

      console.log("render:", {
        count,
        text,
        elementRef: elementRef.current,
      });
    },
  };
}

let App;

App = MyReact.render(Counter2);
App.click();
App = MyReact.render(Counter2);

App.type("new text");
App = MyReact.render(Counter2);
App.noop();
App = MyReact.render(Counter2);

App.click();
App = MyReact.render(Counter2);

App = MyReact.render(Counter2);
App = MyReact.render(Counter2);
