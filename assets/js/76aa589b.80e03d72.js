"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[927],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7692:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l="stopes Module Framework",p={unversionedId:"stopes/index",id:"stopes/index",title:"stopes Module Framework",description:"The stopes library was built for easily managing complex pipelines without",source:"@site/docs/stopes/index.md",sourceDirName:"stopes",slug:"/stopes/",permalink:"/stopes/docs/stopes/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stopes/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"quickstartSidebar",previous:{title:"stopes Modules",permalink:"/stopes/docs/category/stopes-modules"},next:{title:"Module Overview",permalink:"/stopes/docs/stopes/module"}},u={},d=[{value:"Key features:",id:"key-features",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Example",id:"example",level:2}],c={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stopes-module-framework"},"stopes Module Framework"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"stopes")," library was built for easily managing complex pipelines without\nworrying about scaling and reliability code."),(0,o.kt)("h2",{id:"key-features"},"Key features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reproducibility.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"stopes")," is built with a research mindset first. The\nunderlying Hydra framework gives you full control over the configuration of your\npipelines. All the important parameters of your experiments can be defined and\ntracked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easier scaling.")," The ",(0,o.kt)("inlineCode",{parentName:"li"},"stopes")," framework provides clean separation between\nyour pipeline step logic and the scaling code. If you use slurm, run locally or\nwant to deploy on another cluster, your pipeline code and steps shouldn't\nchange."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Caching/memoization.")," With ",(0,o.kt)("inlineCode",{parentName:"li"},"stopes"),", you can iterate faster and more reliably\nvia transparent memoization. We've built the library so your code doesn't need\nto know what's happening with the cache"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Composition.")," The ",(0,o.kt)("inlineCode",{parentName:"li"},"stopes")," API surface is minimum, so you can build a\npipeline by simply writing idiomatic python (using asyncio) and have a quick\nunderstanding of what's going on without needing to understand complex job APIs.")),(0,o.kt)("p",null,"Checkout the ",(0,o.kt)("a",{parentName:"p",href:"quickstart"},"quickstart")," guide and the\n",(0,o.kt)("a",{parentName:"p",href:"category/prebuilt-pipelines"},"pipelines")," we've provided as well as the docs in\nthe sidebar."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"The idea of the ",(0,o.kt)("inlineCode",{parentName:"p"},"stopes"),' framework is to make it easy to build reproducible\npipelines. This is done though "modules", a module is just a class with a ',(0,o.kt)("inlineCode",{parentName:"p"},"run"),"\nfunction that executes something. A module can then be scheduled with the ",(0,o.kt)("inlineCode",{parentName:"p"},"stopes"),'\n"launcher", this will decide where the code gets executed (locally or on a\ncluster) and then wait for the results to be ready.'),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"module")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"stopes")," encapsulate a single step of a pipeline and its\nrequirements. This step is supposed to be able to execute on its own given its\ninput and generate an output. It will most often be executed as an isolated\njob, so shouldn't depend on anything else than its config (e.g. global\nvariables, etc.). This ensures that each module can be run separately and in\nparallel if possible.\nA module also defines a clear API of the step via its configuration."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"pipeline")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"stopes")," it not much more than a python function that connects a\nfew modules together, but it could contain other python logic in the middle.\nWhile you can run a ",(0,o.kt)("inlineCode",{parentName:"p"},"stopes")," module as a normal python callable, the power of\n",(0,o.kt)("inlineCode",{parentName:"p"},"stopes")," comes from the ",(0,o.kt)("inlineCode",{parentName:"p"},"launcher")," that will manage the execution of the modules,\nfind the correct machines with matching requirements (if executing on a cluster)\nand deal with memoization."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"launcher")," is the orchestrator of your pipeline, but is exposed to you\nthrough a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," API, so it looks like any\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},"asyncio")," function and you do not have\nto deal with where your code is being executed, if ",(0,o.kt)("a",{parentName:"p",href:"stopes/cache"},"memoization"),"\nis happening, etc. If you have never dealt with ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," in python, I do\nrecommend checking ",(0,o.kt)("a",{parentName:"p",href:"https://realpython.com/async-io-python/"},"this tutorial"),", it\nlooks scarier than it is."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is an example of a basic pipeline that will take some file inputs, train a\n",(0,o.kt)("a",{parentName:"p",href:"https://faiss.ai/"},"FAISS")," index on it and then populate the index with the\nfiles."),(0,o.kt)("p",null,"This example shows the usage of the launcher and how we reuse existing modules."),(0,o.kt)("p",null,"Here we assume\nthat the files have already been encoded with something that LASER to keep the\nexample simple, but you  want to have a first step doing\nthe encoding (see the ",(0,o.kt)("a",{parentName:"p",href:"pipelines/global_mining"},"global mining pipeline")," for a real example)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="mypipeline.py"',title:'"mypipeline.py"'},'import asyncio\n\nimport hydra\nfrom omegaconf import DictConfig\nfrom stopes.core.utils import clone_config\nfrom stopes.modules.bitext.indexing.populate_faiss_index import PopulateFAISSIndexModule\nfrom stopes.modules.bitext.indexing.train_faiss_index_module import TrainFAISSIndexModule\n\n# the pipeline\nasync def pipeline(config):\n    # setup a launcher to connect jobs together\n    launcher = hydra.utils.instantiate(config.launcher)\n\n    # train the faiss index\n    trained_index = await launcher.schedule(TrainFAISSIndexModule(\n        config=config.train_index\n    ))\n\n    # pass in the trained index to the next step through config\n    with clone_config(config.populate_index) as config_with_index:\n        config_with_index.index=trained_index\n\n    # fill the index with content\n    populated_index = await launcher.schedule(PopulateFAISSIndexModule(\n        config=config_with_index\n    ))\n    print(f"Indexes are populated in: {populated_index}")\n\n# setup main with Hydra\n@hydra.main(config_path="conf", config_name="config")\ndef main(config: DictConfig) -> None:\n    asyncio.run(pipeline(config))\n')),(0,o.kt)("p",null,"Let's start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", this is a very basic boilerplate that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"sets up ",(0,o.kt)("a",{parentName:"li",href:"https://www.hydra.cc"},"hydra")," to get configuration when running the\nscript. We recommend checking the ",(0,o.kt)("a",{parentName:"li",href:"https://hydra.cc/docs/tutorials/intro/"},"hydra tutorial")," on their site to understand\nhow to build configurations and organize them. See below also for an example\nconfig."),(0,o.kt)("li",{parentName:"ol"},"starts ",(0,o.kt)("inlineCode",{parentName:"li"},"asyncio")," and runs our async ",(0,o.kt)("inlineCode",{parentName:"li"},"pipeline")," function.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeline")," function is ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," as it will run some asynchronous code inside\nit, so we need to tell python that this will be the case. The first thing it\ndoes, is to initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"launcher")," from the config, this is a trick to be\nable to swap launchers on the CLI using config overrides. After that, we setup\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"TrainFAISSIndexModule")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule")," it with the launcher. This will check\nif this step was already executed in the past, and if not, will schedule the\nmodule on the cluster (or just locally if you want)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"await"),' keyword tells python to "wait" for the job to finish and once that\nis done, move to the next step. As we need to pass the generated ',(0,o.kt)("inlineCode",{parentName:"p"},"index")," to the\npopulate step, we take the config read from hydra, and fill up the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," with\nthe output of the training. We schedule and await that step, and finally just\nlog the location of the output file."),(0,o.kt)("p",null,"Let's look at the config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config"',title:'"conf/config"'},"\nembedding_files: ???\nembedding_dimensions: 1024\nindex_type: ???\n\nlauncher:\n    _target_: stopes.core.SubmititLauncher\n    log_folder: executor_logs\n    cluster: local\n    partition:\n\ntrain_index:\n  lang: demo\n  embedding_file: ${embedding_files}\n  index_type: ${index_type}\n  data:\n    bname: demo\n    iteration: 0\n  output_dir: ts.index.iteration_0\n  num_cpu: 40\n  use_gpu: True\n  embedding_dimensions: ${embedding_dimensions}\n  fp16_storage: True\n\n\npopulate_index:\n  lang: demo\n  index: ???\n  index_type: ${index_type}\n  embedding_files: ${embedding_files}\n  output_dir: index.0\n  num_cpu: 40\n  embedding_dimensions: ${embedding_dimensions}\n")),(0,o.kt)("p",null,"Hydra will take a yaml file and structure it for our usage in python. You can\nsee that we define at the top level:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"embedding_files: ???\nindex_type: ???\n")),(0,o.kt)("p",null,"This tells hydra that these two entries are empty and required, so it will\nenforce that we specify them on the CLI. We pass them down to the sub-configs\nfor train/populate by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"${}")," placeholders."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"launcher")," entry is setup to initialize the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/submitit"},"submitit")," that currently\nprovides the main job management system. If you wanted to use a different\njob/cluster system, you could implement your own launcher."),(0,o.kt)("p",null,"We can now call our script with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python mypipeline.py embedding_files='[pathtomyfile.bin]' index_type=\"OPQ64,IVF1024,PQ64\"\n")),(0,o.kt)("p",null,"We could also override some of the defaults:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python mypipeline.py embedding_files='[pathtomyfile.bin]' index_type=\"OPQ64,IVF1024,PQ64\" train_index.use_gpu=false\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We use ",(0,o.kt)("a",{parentName:"p",href:"https://www.hydra.cc"},"hydra")," as the configuration system, but note that most modules\ntake a dataclass as config, so you could build that manually from a different\nsystem (like argparse) if you did not want to use hydra.")))}h.isMDXComponent=!0}}]);