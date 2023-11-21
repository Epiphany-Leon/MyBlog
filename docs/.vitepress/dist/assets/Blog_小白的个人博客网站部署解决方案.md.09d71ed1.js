import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.43f8d0eb.js";const l="/MyBlog/assets/Setting.2ad52495.jpg",m=JSON.parse('{"title":"小白的个人博客网站部署解决方案","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"Blog/小白的个人博客网站部署解决方案.md","filePath":"Blog/小白的个人博客网站部署解决方案.md","lastUpdated":null}'),p={name:"Blog/小白的个人博客网站部署解决方案.md"},o=a(`<h1 id="小白的个人博客网站部署解决方案" tabindex="-1">小白的个人博客网站部署解决方案 <a class="header-anchor" href="#小白的个人博客网站部署解决方案" aria-label="Permalink to &quot;小白的个人博客网站部署解决方案&quot;">​</a></h1><p>个人网站：<a href="https://epiphany-leon.github.io/MyBlog/" target="_blank" rel="noreferrer">观南Gheir | 观南Gheir (epiphany-leon.github.io)</a></p><hr><p>Vitepress + Github Pages，大概11月6日发现的个人博客网站部署平替方案，非常适合小白入门。当然，还是存在一定门槛的，虽然不涉及前端代码，但是整个过程会涉及到markdown、terminal和git的一些操作，而我就是对git一窍不通（尽管我很早就在github上找资源，但是从没想过自己会去发布仓库），导致我花了一天时间才构建完成，期间又是遇到了各种各样的问题。</p><hr><h2 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h2><p>VitePress是一个静态网站生成器，内容使用Markdown语法，配置简单，同时附带了一个默认主题，优点在于依赖本地端口，不需要写前端代码，也可以生成一个静态网站，同时具有更快的速度，配置项足够精简并且可用，使得开发者可以进行快速上手。底层使用Vite和Vue3，前端开发者可方便的进行修改或定制。<a href="https://vitepress.dev" target="_blank" rel="noreferrer">点击跳转官网</a></p><blockquote><p>[!NOTE] VitePress官方简介 VitePress is a Static Site Generator(SSG) designed for building fast, content-centric websites. In a nutshell, VitePress takes your source content written in Markdown, applies a theme to it, and generates static HTML pages that can be easily deployed anywhere.</p></blockquote><p>注：下文所述的安装过程和版本说明皆参考对应工具的官网和自我经验，相关信息可能会有更新或变动，以官网与实际问题为准。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><ol><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a>版本18或更高版本。</li><li>通过其命令行界面（CLI）访问VitePress的终端。</li><li>支持<a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a>语法的文本编辑器。 <ul><li>官方建议使用<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a>以及<a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">官方Vue扩展</a>。</li></ul></li></ol><p>VitePress可以单独使用，也可以安装到现有项目中。可以使用以下命令行语句进行安装与初始化配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 安装VitePress</span></span>
<span class="line"><span style="color:#e1e4e8;">npm add -D vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;"># 初始化VitePress</span></span>
<span class="line"><span style="color:#e1e4e8;">npx vitepress init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 安装VitePress</span></span>
<span class="line"><span style="color:#24292e;">npm add -D vitepress</span></span>
<span class="line"><span style="color:#24292e;"># 初始化VitePress</span></span>
<span class="line"><span style="color:#24292e;">npx vitepress init</span></span></code></pre></div><h4 id="初始化的注意事项" tabindex="-1">初始化的注意事项 <a class="header-anchor" href="#初始化的注意事项" aria-label="Permalink to &quot;初始化的注意事项&quot;">​</a></h4><p>命令行界面会给我们一些问题进行基本项目配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">┌  Welcome to VitePress!</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ./docs</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">◇  Site title:</span></span>
<span class="line"><span style="color:#e1e4e8;">│  My Awesome Project</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">◇  Site description:</span></span>
<span class="line"><span style="color:#e1e4e8;">│  A VitePress Site</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">◆  Theme:</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ● Default Theme (Out of the box, good-looking docs)</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ○ Default Theme + Customization</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ○ Custom Theme</span></span>
<span class="line"><span style="color:#e1e4e8;">└</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">┌  Welcome to VitePress!</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span style="color:#24292e;">│  ./docs</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">◇  Site title:</span></span>
<span class="line"><span style="color:#24292e;">│  My Awesome Project</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">◇  Site description:</span></span>
<span class="line"><span style="color:#24292e;">│  A VitePress Site</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">◆  Theme:</span></span>
<span class="line"><span style="color:#24292e;">│  ● Default Theme (Out of the box, good-looking docs)</span></span>
<span class="line"><span style="color:#24292e;">│  ○ Default Theme + Customization</span></span>
<span class="line"><span style="color:#24292e;">│  ○ Custom Theme</span></span>
<span class="line"><span style="color:#24292e;">└</span></span></code></pre></div><ul><li>严格遵守官方的提示步骤与回答格式，不然小白（就是我）之后会对它的文档路径存在疑惑，自缚手脚；</li><li>官网上在这之后给了很多解释地部分，建议小白仔细阅读，理解VitePress的文件结构，有助于理解它的实现过程；</li><li>网络上很多教程时效性不够，官网已经尽可能地简化了所有步骤，很多配置文件是直接帮助生成的，开发者只需要确认文件是否存在以及内容是否正确即可。因此现阶段实验下来，非常适合小白入手。</li></ul><h3 id="本地运行" tabindex="-1">本地运行 <a class="header-anchor" href="#本地运行" aria-label="Permalink to &quot;本地运行&quot;">​</a></h3><p>命令行界面键入以下命令分别实现对应功能：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 开发模式启动</span></span>
<span class="line"><span style="color:#e1e4e8;">npm run docs:dev</span></span>
<span class="line"><span style="color:#e1e4e8;"># 手动构建</span></span>
<span class="line"><span style="color:#e1e4e8;">npm run docs:build</span></span>
<span class="line"><span style="color:#e1e4e8;"># 预览构建成果</span></span>
<span class="line"><span style="color:#e1e4e8;">npm run docs:preview</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 开发模式启动</span></span>
<span class="line"><span style="color:#24292e;">npm run docs:dev</span></span>
<span class="line"><span style="color:#24292e;"># 手动构建</span></span>
<span class="line"><span style="color:#24292e;">npm run docs:build</span></span>
<span class="line"><span style="color:#24292e;"># 预览构建成果</span></span>
<span class="line"><span style="color:#24292e;">npm run docs:preview</span></span></code></pre></div><p>把命令行中出现的网址复制到浏览器中，即可预览效果。Mac直接Command+Click可跳转至默认浏览器预览。</p><h3 id="个性化" tabindex="-1">个性化 <a class="header-anchor" href="#个性化" aria-label="Permalink to &quot;个性化&quot;">​</a></h3><p>个性化部分就不赘述，可以自己去开发一下，蛮有趣的哈哈～</p><h2 id="撰写文章" tabindex="-1">撰写文章 <a class="header-anchor" href="#撰写文章" aria-label="Permalink to &quot;撰写文章&quot;">​</a></h2><p>这一部分没有什么好讲的，哪怕纯粹的文字编辑也是可以完成的，而我的文章基本上都是文字居多，Markdown就非常适合我的整理习惯。</p><p>加之我平常使用Typora记录课堂笔记、头脑风暴等等，目前还在使用Obsidian构建自己的知识体系。并且，不觉得Markdown语法比Python等编程类语言简单多了嘛，几乎没有上手难度的嘛（你就说对不对吧）。</p><p>因此，这一块唯一能讲的就是，有些人习惯利用命令行创建文件，然后在VSCode里编辑，我习惯先单独创建md文件然后复制文件到根目录下进行文件链接等方面的编辑。视个人习惯而定。</p><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>依据官网指南，需要具备以下前提：</p><ol><li>VitePress网站位于您项目的<code>docs</code>目录中；</li><li>使用的默认构建输出目录为：<code>.vitepress/dist</code>；</li><li>VitePress是作为本地依赖项安装到项目中的，并且您在<code>package.json</code>中设置了以下脚本：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;docs:preview&quot;: &quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;docs:preview&quot;: &quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="本地构建与测试" tabindex="-1">本地构建与测试 <a class="header-anchor" href="#本地构建与测试" aria-label="Permalink to &quot;本地构建与测试&quot;">​</a></h3><p>即为使用以下命令行进行本地构建：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 开发模式启动</span></span>
<span class="line"><span style="color:#e1e4e8;">npm run docs:dev</span></span>
<span class="line"><span style="color:#e1e4e8;"># 手动构建</span></span>
<span class="line"><span style="color:#e1e4e8;">npm run docs:build</span></span>
<span class="line"><span style="color:#e1e4e8;"># 预览构建成果</span></span>
<span class="line"><span style="color:#e1e4e8;">npm run docs:preview</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 开发模式启动</span></span>
<span class="line"><span style="color:#24292e;">npm run docs:dev</span></span>
<span class="line"><span style="color:#24292e;"># 手动构建</span></span>
<span class="line"><span style="color:#24292e;">npm run docs:build</span></span>
<span class="line"><span style="color:#24292e;"># 预览构建成果</span></span>
<span class="line"><span style="color:#24292e;">npm run docs:preview</span></span></code></pre></div><p>VitePress会调用本地端口（<code>port</code>）进行静态网站构建，可以依据<a href="https://vitepress.dev/guide/deploy" target="_blank" rel="noreferrer">官网步骤</a>自定义端口。</p><h3 id="github-pages" tabindex="-1">Github Pages <a class="header-anchor" href="#github-pages" aria-label="Permalink to &quot;Github Pages&quot;">​</a></h3><blockquote><p>[!NOTE] Github Pages <code>GitHub Pages</code> 是一项<strong>静态站点托管服务</strong>，它直接从 GitHub 上的仓库获取 index.html、HTML、CSS 和 JavaScript 文件，也可以通过构建过程运行文件，然后发布网站。</p></blockquote><p>优势：</p><ol><li><strong>无更新成本：</strong> Github Pages集成在Github中，直接和代码管理绑定在一起，随着代码更新自动重新部署, 使用非常方便；</li><li><strong>免费：</strong> 免费提供一个 <code>http://username.github.io</code> 的域名，免费的静态网站服务器，很香，不需要单独购买域名；</li><li><strong>不需要独立服务器：</strong> 直接使用Github的服务器，不需要开发者自己的服务器；</li><li><strong>无数量限制：</strong> Github Pages没有使用的数量限制，每一个Repository都可以部署为一个静态网站，理论上来说我可以构建很多个网站然后互相链接（bushi）。</li></ol><p>缺点：</p><ol><li>需要对Git有一定了解，不然会像我一样折腾很久；</li><li>得有一定的前端知识，不然也会折腾很久；</li><li>MacOS好像都会出现各种各样的小问题，比如授予访问权限等，有点麻烦。</li></ol><h4 id="部署流程" tabindex="-1">部署流程 <a class="header-anchor" href="#部署流程" aria-label="Permalink to &quot;部署流程&quot;">​</a></h4><ol><li>首先在 <code>Github</code> 上创建一个仓库；</li><li>在你的主题配置文件 <code>docs/.vitepress/config.js</code> 中，将 <code>base</code> 属性设置为你的 GitHub 仓库的名称。 如果你打算将你的站点部署到<code>https://username.github.io/MyBlog/</code>，那么你应该将base设置为<code>&#39;/MyBlog/&#39;</code>。 字符串格式，且始终以斜线开头和结尾；</li><li>进入Repository的<code>Settings</code>界面，选中<code>Pages</code>，在<code>Build and deployment</code>中选择<code>source</code>为<code>Github Actions</code>；<img src="`+l+`" alt="Setting"></li><li>进入<code>Settings</code>的同级目录<code>Actions</code>，选择创建<code>New Workflow</code>，创建一个名为 <code>deploy.yml</code> 的文件，代码参考<a href="https://vitepress.dev/guide/deploy" target="_blank" rel="noreferrer">官网</a>：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Sample workflow for building and deploying a VitePress site to GitHub Pages</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">name: Deploy VitePress site to Pages</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">on:</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Runs on pushes targeting the \`main\` branch. Change this to \`master\` if you&#39;re</span></span>
<span class="line"><span style="color:#e1e4e8;">  # using the \`master\` branch as the default branch.</span></span>
<span class="line"><span style="color:#e1e4e8;">  push:</span></span>
<span class="line"><span style="color:#e1e4e8;">    branches: [main]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  # Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="color:#e1e4e8;">  workflow_dispatch:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages</span></span>
<span class="line"><span style="color:#e1e4e8;">permissions:</span></span>
<span class="line"><span style="color:#e1e4e8;">  contents: read</span></span>
<span class="line"><span style="color:#e1e4e8;">  pages: write</span></span>
<span class="line"><span style="color:#e1e4e8;">  id-token: write</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.</span></span>
<span class="line"><span style="color:#e1e4e8;"># However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.</span></span>
<span class="line"><span style="color:#e1e4e8;">concurrency:</span></span>
<span class="line"><span style="color:#e1e4e8;">  group: pages</span></span>
<span class="line"><span style="color:#e1e4e8;">  cancel-in-progress: false</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">jobs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Build job</span></span>
<span class="line"><span style="color:#e1e4e8;">  build:</span></span>
<span class="line"><span style="color:#e1e4e8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#e1e4e8;">    steps:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Checkout</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          fetch-depth: 0 # Not needed if lastUpdated is not enabled</span></span>
<span class="line"><span style="color:#e1e4e8;">      # - uses: pnpm/action-setup@v2 # Uncomment this if you&#39;re using pnpm</span></span>
<span class="line"><span style="color:#e1e4e8;">      # - uses: oven-sh/setup-bun@v1 # Uncomment this if you&#39;re using Bun</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Setup Node</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          node-version: 18</span></span>
<span class="line"><span style="color:#e1e4e8;">          cache: npm # or pnpm / yarn</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Setup Pages</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: actions/configure-pages@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Install dependencies</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: npm ci # or pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Build with VitePress</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: |</span></span>
<span class="line"><span style="color:#e1e4e8;">          npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="color:#e1e4e8;">          touch docs/.vitepress/dist/.nojekyll</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Upload artifact</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: actions/upload-pages-artifact@v2</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          path: docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  # Deployment job</span></span>
<span class="line"><span style="color:#e1e4e8;">  deploy:</span></span>
<span class="line"><span style="color:#e1e4e8;">    environment:</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: github-pages</span></span>
<span class="line"><span style="color:#e1e4e8;">      url: \${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#e1e4e8;">    needs: build</span></span>
<span class="line"><span style="color:#e1e4e8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: Deploy</span></span>
<span class="line"><span style="color:#e1e4e8;">    steps:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#e1e4e8;">        id: deployment</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: actions/deploy-pages@v2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Sample workflow for building and deploying a VitePress site to GitHub Pages</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">name: Deploy VitePress site to Pages</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">on:</span></span>
<span class="line"><span style="color:#24292e;">  # Runs on pushes targeting the \`main\` branch. Change this to \`master\` if you&#39;re</span></span>
<span class="line"><span style="color:#24292e;">  # using the \`master\` branch as the default branch.</span></span>
<span class="line"><span style="color:#24292e;">  push:</span></span>
<span class="line"><span style="color:#24292e;">    branches: [main]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  # Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="color:#24292e;">  workflow_dispatch:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages</span></span>
<span class="line"><span style="color:#24292e;">permissions:</span></span>
<span class="line"><span style="color:#24292e;">  contents: read</span></span>
<span class="line"><span style="color:#24292e;">  pages: write</span></span>
<span class="line"><span style="color:#24292e;">  id-token: write</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.</span></span>
<span class="line"><span style="color:#24292e;"># However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.</span></span>
<span class="line"><span style="color:#24292e;">concurrency:</span></span>
<span class="line"><span style="color:#24292e;">  group: pages</span></span>
<span class="line"><span style="color:#24292e;">  cancel-in-progress: false</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jobs:</span></span>
<span class="line"><span style="color:#24292e;">  # Build job</span></span>
<span class="line"><span style="color:#24292e;">  build:</span></span>
<span class="line"><span style="color:#24292e;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#24292e;">    steps:</span></span>
<span class="line"><span style="color:#24292e;">      - name: Checkout</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          fetch-depth: 0 # Not needed if lastUpdated is not enabled</span></span>
<span class="line"><span style="color:#24292e;">      # - uses: pnpm/action-setup@v2 # Uncomment this if you&#39;re using pnpm</span></span>
<span class="line"><span style="color:#24292e;">      # - uses: oven-sh/setup-bun@v1 # Uncomment this if you&#39;re using Bun</span></span>
<span class="line"><span style="color:#24292e;">      - name: Setup Node</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          node-version: 18</span></span>
<span class="line"><span style="color:#24292e;">          cache: npm # or pnpm / yarn</span></span>
<span class="line"><span style="color:#24292e;">      - name: Setup Pages</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/configure-pages@v3</span></span>
<span class="line"><span style="color:#24292e;">      - name: Install dependencies</span></span>
<span class="line"><span style="color:#24292e;">        run: npm ci # or pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="color:#24292e;">      - name: Build with VitePress</span></span>
<span class="line"><span style="color:#24292e;">        run: |</span></span>
<span class="line"><span style="color:#24292e;">          npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="color:#24292e;">          touch docs/.vitepress/dist/.nojekyll</span></span>
<span class="line"><span style="color:#24292e;">      - name: Upload artifact</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/upload-pages-artifact@v2</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          path: docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  # Deployment job</span></span>
<span class="line"><span style="color:#24292e;">  deploy:</span></span>
<span class="line"><span style="color:#24292e;">    environment:</span></span>
<span class="line"><span style="color:#24292e;">      name: github-pages</span></span>
<span class="line"><span style="color:#24292e;">      url: \${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#24292e;">    needs: build</span></span>
<span class="line"><span style="color:#24292e;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#24292e;">    name: Deploy</span></span>
<span class="line"><span style="color:#24292e;">    steps:</span></span>
<span class="line"><span style="color:#24292e;">      - name: Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#24292e;">        id: deployment</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/deploy-pages@v2</span></span></code></pre></div><ol start="5"><li>使用以下命令行指令，将项目推送到<code>main</code>分支，并等待GitHub Actions工作流程完成。推流完成应该会看到网站部署到<code>https://&lt;username&gt;.github.io/[repository]/</code>或<code>https://&lt;custom-domain&gt;/</code>。个人网站将在每次推送到<code>main</code>分支时自动部署。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git init</span></span>
<span class="line"><span style="color:#e1e4e8;">git remote add origin git@github.com:&lt;username&gt;/[repository].git</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch -M master</span></span>
<span class="line"><span style="color:#e1e4e8;">git push -u origin master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git init</span></span>
<span class="line"><span style="color:#24292e;">git remote add origin git@github.com:&lt;username&gt;/[repository].git</span></span>
<span class="line"><span style="color:#24292e;">git branch -M master</span></span>
<span class="line"><span style="color:#24292e;">git push -u origin master</span></span></code></pre></div><h4 id="一些可能的部署问题" tabindex="-1">一些可能的部署问题 <a class="header-anchor" href="#一些可能的部署问题" aria-label="Permalink to &quot;一些可能的部署问题&quot;">​</a></h4><ol><li>MacOS碰到的访问权限问题：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git@github.com: Permission denied (publickey).</span></span>
<span class="line"><span style="color:#e1e4e8;">fatal: Could not read from remote repository.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Please make sure you have the correct access rights</span></span>
<span class="line"><span style="color:#e1e4e8;">and the repository exists.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git@github.com: Permission denied (publickey).</span></span>
<span class="line"><span style="color:#24292e;">fatal: Could not read from remote repository.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Please make sure you have the correct access rights</span></span>
<span class="line"><span style="color:#24292e;">and the repository exists.</span></span></code></pre></div><p>解决方法</p><p><a href="https://stackoverflow.com/questions/2643502/git-how-to-solve-permission-denied-publickey-error-when-using-git/42641637#42641637" target="_blank" rel="noreferrer">来源1</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">**First Step: Checking if we already have the public SSH key.**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1. Open Terminal.</span></span>
<span class="line"><span style="color:#e1e4e8;">2. Enter \`ls -al ~/.ssh\` to see if existing SSH keys are present:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Check the directory list to see if you already have a public SSH key. Default public is one of the following d_dsa.pub, id_ecdsa.pub, id_ed25519.pub, id_rsa.pub.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">If you don&#39;t find then go to step 2 otherwise follow step 3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**Step 2: Generating public SSH key**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1. Open Terminal.</span></span>
<span class="line"><span style="color:#e1e4e8;">2. Enter the following command with a valid email address that you use for github \`ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;\`</span></span>
<span class="line"><span style="color:#e1e4e8;">3. You will see the following in your terminal \`Generating public/private rsa key pair\`. When it prompts to\`&quot;Enter a file in which to save the key,&quot;\` press Enter. This accepts the default file location. When it prompts to \`Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]\` Just press enter again.</span></span>
<span class="line"><span style="color:#e1e4e8;">4. At the prompt, \`&quot;Type a secure passphrase. Enter passphrase (empty for no passphrase): [Type a passphrase]&quot;\` press enter if you don&#39;t want to \`Enter same passphrase again: [Type passphrase again]\` press enter again</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">This will generate \`id_rsa.pub\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**Step 3: Adding your SSH key to the ssh-agent**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1. Interminal type \`eval &quot;$(ssh-agent -s)&quot;\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">2. Add your SSH key to the ssh-agent. If you are using an existing SSH key rather than generating a new SSH key, you&#39;ll need to replace id_rsa in the command with the name of your existing private key file. Enter this command \`$ ssh-add -K ~/.ssh/id_rsa\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">3. Now copy the SSH key and also add it to you github account</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">4. In terminal enter this command with your ssh file name \`pbcopy &lt; ~/.ssh/id_rsa.pub\`This will copy the file to your clipboard Now open you github account Go to **Settings &gt; SSH and GPG keys &gt; New SSH key** Enter title and paste the key from clipboard and save it. Voila you&#39;re done.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">**First Step: Checking if we already have the public SSH key.**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1. Open Terminal.</span></span>
<span class="line"><span style="color:#24292e;">2. Enter \`ls -al ~/.ssh\` to see if existing SSH keys are present:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Check the directory list to see if you already have a public SSH key. Default public is one of the following d_dsa.pub, id_ecdsa.pub, id_ed25519.pub, id_rsa.pub.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">If you don&#39;t find then go to step 2 otherwise follow step 3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**Step 2: Generating public SSH key**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1. Open Terminal.</span></span>
<span class="line"><span style="color:#24292e;">2. Enter the following command with a valid email address that you use for github \`ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;\`</span></span>
<span class="line"><span style="color:#24292e;">3. You will see the following in your terminal \`Generating public/private rsa key pair\`. When it prompts to\`&quot;Enter a file in which to save the key,&quot;\` press Enter. This accepts the default file location. When it prompts to \`Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]\` Just press enter again.</span></span>
<span class="line"><span style="color:#24292e;">4. At the prompt, \`&quot;Type a secure passphrase. Enter passphrase (empty for no passphrase): [Type a passphrase]&quot;\` press enter if you don&#39;t want to \`Enter same passphrase again: [Type passphrase again]\` press enter again</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">This will generate \`id_rsa.pub\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**Step 3: Adding your SSH key to the ssh-agent**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1. Interminal type \`eval &quot;$(ssh-agent -s)&quot;\`</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">2. Add your SSH key to the ssh-agent. If you are using an existing SSH key rather than generating a new SSH key, you&#39;ll need to replace id_rsa in the command with the name of your existing private key file. Enter this command \`$ ssh-add -K ~/.ssh/id_rsa\`</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">3. Now copy the SSH key and also add it to you github account</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">4. In terminal enter this command with your ssh file name \`pbcopy &lt; ~/.ssh/id_rsa.pub\`This will copy the file to your clipboard Now open you github account Go to **Settings &gt; SSH and GPG keys &gt; New SSH key** Enter title and paste the key from clipboard and save it. Voila you&#39;re done.</span></span></code></pre></div><p><a href="https://blog.csdn.net/XUANEER/article/details/116170523#:~:text=%E8%BE%93%E5%85%A5%20y%20%E7%94%9F%E6%88%90id_rsa.pub%20%E6%96%87%E4%BB%B6%E5%90%8E%2C%20%E6%89%A7%E8%A1%8C%20vi%20id_rsa.pub%20%E6%89%93%E5%BC%80%E6%96%87%E4%BB%B6%2C,but%20GitHub%20does%20not%20provide%20shell%20access.%201" target="_blank" rel="noreferrer">来源2</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1 首先用 ssh -vT git@github.com 测试一下，会去你用户目录下面找公钥文件, 有打印出下面的信息,这说明/User/用户名/.ssh/ 下面去寻找公钥文件，当前用户目录下面的确没有公钥文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	debug1: No more authentication methods to try.</span></span>
<span class="line"><span style="color:#e1e4e8;">	git@github.com: Permission denied (publickey).</span></span>
<span class="line"><span style="color:#e1e4e8;">2 执行: cd /Users/xxx/.ssh/</span></span>
<span class="line"><span style="color:#e1e4e8;">3 执行: ssh-keygen -t rsa -b 4096 -C “Git 上关联的email”</span></span>
<span class="line"><span style="color:#e1e4e8;">	Generating public/private rsa key pair.</span></span>
<span class="line"><span style="color:#e1e4e8;">	Enter file in which to save the key (/Users/chenxuan/.ssh/id_rsa):</span></span>
<span class="line"><span style="color:#e1e4e8;">4 点击回车</span></span>
<span class="line"><span style="color:#e1e4e8;">	/Users/xxx/.ssh/id_rsa already exists</span></span>
<span class="line"><span style="color:#e1e4e8;">	Overwrite (y/n)</span></span>
<span class="line"><span style="color:#e1e4e8;">5 输入 y</span></span>
<span class="line"><span style="color:#e1e4e8;">6 生成id_rsa.pub 文件后, 执行 vi id_rsa.pub 打开文件, 复制文件内容到GitHub --&gt; settings–&gt;SSH and GPG Keys --&gt; new SSH key</span></span>
<span class="line"><span style="color:#e1e4e8;">7 然后保存</span></span>
<span class="line"><span style="color:#e1e4e8;">8 重新执行 ssh -vT git@github.com , 成功提示:</span></span>
<span class="line"><span style="color:#e1e4e8;">	You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">————————————————</span></span>
<span class="line"><span style="color:#e1e4e8;">版权声明：本文为CSDN博主「Xxxuaneer」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。</span></span>
<span class="line"><span style="color:#e1e4e8;">原文链接：https://blog.csdn.net/XUANEER/article/details/116170523</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1 首先用 ssh -vT git@github.com 测试一下，会去你用户目录下面找公钥文件, 有打印出下面的信息,这说明/User/用户名/.ssh/ 下面去寻找公钥文件，当前用户目录下面的确没有公钥文件</span></span>
<span class="line"><span style="color:#24292e;">	debug1: No more authentication methods to try.</span></span>
<span class="line"><span style="color:#24292e;">	git@github.com: Permission denied (publickey).</span></span>
<span class="line"><span style="color:#24292e;">2 执行: cd /Users/xxx/.ssh/</span></span>
<span class="line"><span style="color:#24292e;">3 执行: ssh-keygen -t rsa -b 4096 -C “Git 上关联的email”</span></span>
<span class="line"><span style="color:#24292e;">	Generating public/private rsa key pair.</span></span>
<span class="line"><span style="color:#24292e;">	Enter file in which to save the key (/Users/chenxuan/.ssh/id_rsa):</span></span>
<span class="line"><span style="color:#24292e;">4 点击回车</span></span>
<span class="line"><span style="color:#24292e;">	/Users/xxx/.ssh/id_rsa already exists</span></span>
<span class="line"><span style="color:#24292e;">	Overwrite (y/n)</span></span>
<span class="line"><span style="color:#24292e;">5 输入 y</span></span>
<span class="line"><span style="color:#24292e;">6 生成id_rsa.pub 文件后, 执行 vi id_rsa.pub 打开文件, 复制文件内容到GitHub --&gt; settings–&gt;SSH and GPG Keys --&gt; new SSH key</span></span>
<span class="line"><span style="color:#24292e;">7 然后保存</span></span>
<span class="line"><span style="color:#24292e;">8 重新执行 ssh -vT git@github.com , 成功提示:</span></span>
<span class="line"><span style="color:#24292e;">	You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">————————————————</span></span>
<span class="line"><span style="color:#24292e;">版权声明：本文为CSDN博主「Xxxuaneer」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。</span></span>
<span class="line"><span style="color:#24292e;">原文链接：https://blog.csdn.net/XUANEER/article/details/116170523</span></span></code></pre></div><p>依靠这两篇文章，应该可以完美解决问题。</p><ol start="2"><li>剩下的问题其实都源自于对Git的一无所知，稍微花点时间学习一下就可以了～</li></ol><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>惯例，有个结语。</p><p>你说，我花了这么多时间，在这个时间点，去研究和我的专业没有任何关系的东西，值得吗？</p><p>我想，是值得的。也许它跟我的专业无关，甚至这只是我的一时兴起，可是，那又怎样呢？网站完成的那一刻，我是无比高兴且满足的。写公众号也是，这是我的自娱自乐，是我的精神乐土，但我这一刻感到开心，足够了。</p><p>可是仅仅只有快乐是不会让我这么痴迷于运营公众号，探索新奇的事物的。是好奇心，是翻飞的思绪与想法。这样的探索给我带来了一成不变的生活中的可能与小确幸，即便这周很多考试，即便我的未来规划很紧张。但那又怎么样，我想做，所以我去做了。</p><p>想在枯燥的生活中找到一些失控的瞬间。</p>`,62),t=[o];function i(c,r,d,y,u,h){return e(),n("div",null,t)}const b=s(p,[["render",i]]);export{m as __pageData,b as default};
