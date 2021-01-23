(this["webpackJsonpgitignore-generator"]=this["webpackJsonpgitignore-generator"]||[]).push([[0],{100:function(n,e,t){},354:function(n,e,t){"use strict";t.r(e);var o=t(4),i=t(0),a=t.n(i),s=t(9),r=t.n(s),c=(t(100),t(376)),l=t(389),d=t(378),p=t(380),u=t(35),g=t(83),m=t.n(g),h=Object(c.a)((function(n){return{icon:{marginRight:n.spacing(2)},title:{textTransform:"capitalize"}}})),b=function(){var n=h();return Object(o.jsx)(d.a,{position:"static",children:Object(o.jsxs)(p.a,{children:[Object(o.jsx)(m.a,{className:n.icon}),Object(o.jsx)(u.a,{variant:"h6",className:n.title,children:"gitignore generator"})]})})},y=t(34),f=t(356),j=t(57),v=t(381),x=t(382),k=t(391),O=t(384),_=t(385),w=[{name:"c",data:"\n# -----------------------\n# C\n# -----------------------\n# Prerequisites\n*.d\n\n# Object files\n*.o\n*.ko\n*.obj\n*.elf\n\n# Linker output\n*.ilk\n*.map\n*.exp\n\n# Precompiled Headers\n*.gch\n*.pch\n\n# Libraries\n*.lib\n*.a\n*.la\n*.lo\n\n# Shared objects (inc. Windows DLLs)\n*.dll\n*.so\n*.so.*\n*.dylib\n\n# Executables\n*.exe\n*.out\n*.app\n*.i*86\n*.x86_64\n*.hex\n\n# Debug files\n*.dSYM/\n*.su\n*.idb\n*.pdb\n\n# Kernel Module Compile Results\n*.mod*\n*.cmd\n.tmp_versions/\nmodules.order\nModule.symvers\nMkfile.old\ndkms.conf\n",checked:!1},{name:"cmake",data:"\n# -----------------------\n# CMake\n# -----------------------\nCMakeLists.txt.user\nCMakeCache.txt\nCMakeFiles\nCMakeScripts\nTesting\nMakefile\ncmake_install.cmake\ninstall_manifest.txt\ncompile_commands.json\nCTestTestfile.cmake\n_deps\n",checked:!1},{name:"c++",data:"\n# -----------------------\n# C++\n# -----------------------\n# Prerequisites\n*.d\n\n# Compiled Object files\n*.slo\n*.lo\n*.o\n*.obj\n\n# Precompiled Headers\n*.gch\n*.pch\n\n# Compiled Dynamic libraries\n*.so\n*.dylib\n*.dll\n\n# Fortran module files\n*.mod\n*.smod\n\n# Compiled Static libraries\n*.lai\n*.la\n*.a\n*.lib\n\n# Executables\n*.exe\n*.out\n*.app\n",checked:!1},{name:"go",data:"\n# -----------------------\n# Go\n# -----------------------\n# Binaries for programs and plugins\n*.exe\n*.exe~\n*.dll\n*.so\n*.dylib\n\n# Test binary, built with 'go test -c'\n*.test\n\n# Output of the go coverage tool, specifically when used with LiteIDE\n*.out\n\n# Dependency directories (remove the comment below to include it)\n# vendor/\n",checked:!1},{name:"java",data:"\n# -----------------------\n# Java\n# -----------------------\n# Compiled class file\n*.class\n\n# Log file\n*.log\n\n# BlueJ files\n*.ctxt\n\n# Mobile Tools for Java (J2ME)\n.mtj.tmp/\n\n# Package Files #\n*.jar\n*.war\n*.nar\n*.ear\n*.zip\n*.tar.gz\n*.rar\n\n# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml\nhs_err_pid*\n",checked:!1},{name:"labview",data:"\n# -----------------------\n# LabVIEW\n# -----------------------\n# Libraries\n*.lvlibp\n*.llb\n\n# Shared objects (inc. Windows DLLs)\n*.dll\n*.so\n*.so.*\n*.dylib\n\n# Executables\n*.exe\n\n# Metadata\n*.aliases\n*.lvlps\n.cache/\n",checked:!1},{name:"node",data:"\n# -----------------------\n# Node\n# -----------------------\n# Logs\nlogs\n*.log\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\nlerna-debug.log*\n\n# Diagnostic reports (https://nodejs.org/api/report.html)\nreport.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json\n\n# Runtime data\npids\n*.pid\n*.seed\n*.pid.lock\n\n# Directory for instrumented libs generated by jscoverage/JSCover\nlib-cov\n\n# Coverage directory used by tools like istanbul\ncoverage\n*.lcov\n\n# nyc test coverage\n.nyc_output\n\n# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)\n.grunt\n\n# Bower dependency directory (https://bower.io/)\nbower_components\n\n# node-waf configuration\n.lock-wscript\n\n# Compiled binary addons (https://nodejs.org/api/addons.html)\nbuild/Release\n\n# Dependency directories\nnode_modules/\njspm_packages/\n\n# Snowpack dependency directory (https://snowpack.dev/)\nweb_modules/\n\n# TypeScript cache\n*.tsbuildinfo\n\n# Optional npm cache directory\n.npm\n\n# Optional eslint cache\n.eslintcache\n\n# Microbundle cache\n.rpt2_cache/\n.rts2_cache_cjs/\n.rts2_cache_es/\n.rts2_cache_umd/\n\n# Optional REPL history\n.node_repl_history\n\n# Output of 'npm pack'\n*.tgz\n\n# Yarn Integrity file\n.yarn-integrity\n\n# dotenv environment variables file\n.env\n.env.test\n\n# parcel-bundler cache (https://parceljs.org/)\n.cache\n.parcel-cache\n\n# Next.js build output\n.next\nout\n\n# Nuxt.js build / generate output\n.nuxt\ndist\n\n# Gatsby files\n.cache/\n# Comment in the public line in if your project uses Gatsby and not Next.js\n# https://nextjs.org/blog/next-9-1#public-directory-support\n# public\n\n# vuepress build output\n.vuepress/dist\n\n# Serverless directories\n.serverless/\n\n# FuseBox cache\n.fusebox/\n\n# DynamoDB Local files\n.dynamodb/\n\n# TernJS port file\n.tern-port\n\n# Stores VSCode versions used for testing VSCode extensions\n.vscode-test\n\n# yarn v2\n.yarn/cache\n.yarn/unplugged\n.yarn/build-state.yml\n.yarn/install-state.gz\n.pnp.*\n",checked:!1},{name:"python",data:"\n# -----------------------\n# Python\n# -----------------------\n# Byte-compiled / optimized / DLL files\n__pycache__/\n*.py[cod]\n*$py.class\n\n# C extensions\n*.so\n\n# Distribution / packaging\n.Python\nbuild/\ndevelop-eggs/\ndist/\ndownloads/\neggs/\n.eggs/\nlib/\nlib64/\nparts/\nsdist/\nvar/\nwheels/\nshare/python-wheels/\n*.egg-info/\n.installed.cfg\n*.egg\nMANIFEST\n\n# PyInstaller\n#  Usually these files are written by a python script from a template\n#  before PyInstaller builds the exe, so as to inject date/other infos into it.\n*.manifest\n*.spec\n\n# Installer logs\npip-log.txt\npip-delete-this-directory.txt\n\n# Unit test / coverage reports\nhtmlcov/\n.tox/\n.nox/\n.coverage\n.coverage.*\n.cache\nnosetests.xml\ncoverage.xml\n*.cover\n*.py,cover\n.hypothesis/\n.pytest_cache/\ncover/\n\n# Translations\n*.mo\n*.pot\n\n# Django stuff:\n*.log\nlocal_settings.py\ndb.sqlite3\ndb.sqlite3-journal\n\n# Flask stuff:\ninstance/\n.webassets-cache\n\n# Scrapy stuff:\n.scrapy\n\n# Sphinx documentation\ndocs/_build/\n\n# PyBuilder\n.pybuilder/\ntarget/\n\n# Jupyter Notebook\n.ipynb_checkpoints\n\n# IPython\nprofile_default/\nipython_config.py\n\n# pyenv\n#   For a library or package, you might want to ignore these files since the code is\n#   intended to run in multiple environments; otherwise, check them in:\n# .python-version\n\n# pipenv\n#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.\n#   However, in case of collaboration, if having platform-specific dependencies or dependencies\n#   having no cross-platform support, pipenv may install dependencies that don't work, or not\n#   install all needed dependencies.\n#Pipfile.lock\n\n# PEP 582; used by e.g. github.com/David-OConnor/pyflow\n__pypackages__/\n\n# Celery stuff\ncelerybeat-schedule\ncelerybeat.pid\n\n# SageMath parsed files\n*.sage.py\n\n# Environments\n.env\n.venv\nenv/\nvenv/\nENV/\nenv.bak/\nvenv.bak/\n\n# Spyder project settings\n.spyderproject\n.spyproject\n\n# Rope project settings\n.ropeproject\n\n# mkdocs documentation\n/site\n\n# mypy\n.mypy_cache/\n.dmypy.json\ndmypy.json\n\n# Pyre type checker\n.pyre/\n\n# pytype static type analyzer\n.pytype/\n\n# Cython debug symbols\ncython_debug/\n",checked:!1},{name:"r",data:"\n# -----------------------\n# R\n# -----------------------\n# History files\n.Rhistory\n.Rapp.history\n\n# Session Data files\n.RData\n\n# User-specific files\n.Ruserdata\n\n# Example code in package build process\n*-Ex.R\n\n# Output files from R CMD build\n/*.tar.gz\n\n# Output files from R CMD check\n/*.Rcheck/\n\n# RStudio files\n.Rproj.user/\n\n# produced vignettes\nvignettes/*.html\nvignettes/*.pdf\n\n# OAuth2 token, see https://github.com/hadley/httr/releases/tag/v0.3\n.httr-oauth\n\n# knitr and R markdown default cache directories\n*_cache/\n/cache/\n\n# Temporary files created by R markdown\n*.utf8.md\n*.knit.md\n\n# R Environment Variables\n.Renviron\n\n# pkgdown site\ndocs/\n\n# translation temp files\npo/*~\n",checked:!1},{name:"ruby",data:"\n# -----------------------\n# Ruby\n# -----------------------\n*.gem\n*.rbc\n/.config\n/coverage/\n/InstalledFiles\n/pkg/\n/spec/reports/\n/spec/examples.txt\n/test/tmp/\n/test/version_tmp/\n/tmp/\n\n# Used by dotenv library to load environment variables.\n# .env\n\n# Ignore Byebug command history file.\n.byebug_history\n\n## Specific to RubyMotion:\n.dat*\n.repl_history\nbuild/\n*.bridgesupport\nbuild-iPhoneOS/\nbuild-iPhoneSimulator/\n\n## Specific to RubyMotion (use of CocoaPods):\n#\n# We recommend against adding the Pods directory to your .gitignore. However\n# you should judge for yourself, the pros and cons are mentioned at:\n# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control\n#\n# vendor/Pods/\n\n## Documentation cache and generated files:\n/.yardoc/\n/_yardoc/\n/doc/\n/rdoc/\n\n## Environment normalization:\n/.bundle/\n/vendor/bundle\n/lib/bundler/man/\n\n# for a library or gem, you might want to ignore these files since the code is\n# intended to run in multiple environments; otherwise, check them in:\n# Gemfile.lock\n# .ruby-version\n# .ruby-gemset\n\n# unless supporting rvm < 1.11.0 or doing something fancy, ignore this:\n.rvmrc\n\n# Used by RuboCop. Remote config files pulled in from inherit_from directive.\n# .rubocop-https?--*\n",checked:!1},{name:"rust",data:"\n# -----------------------\n# Rust\n# -----------------------\n# Generated by Cargo\n# will have compiled files and executables\ndebug/\ntarget/\n\n# Remove Cargo.lock from gitignore if creating an executable, leave it for libraries\n# More information here https://doc.rust-lang.org/cargo/guide/cargo-toml-vs-cargo-lock.html\nCargo.lock\n\n# These are backup files generated by rustfmt\n**/*.rs.bk\n",checked:!1}],C=Object(c.a)((function(n){return{root:{display:"inline-block"},listItems:{paddingTop:"0",paddingBottom:"0"},listItemsText:{textTransform:"capitalize"},button:{margin:n.spacing(3)}}})),R=function(n){var e=n.output,t=n.setOutput,a=n.openDialog,s=C(),r=Object(i.useState)(w),c=Object(y.a)(r,2),l=c[0],d=c[1],p=function(n){var e=n.target.name,o=l.map((function(t){return t.name!==e?t:Object(j.a)(Object(j.a)({},t),{},{checked:n.target.checked})})),i=o.map((function(n){return n.checked?n.data:null})).filter((function(n){return n})).join("\n");d(o),t(i)};return Object(o.jsxs)("div",{className:s.root,children:[Object(o.jsx)(v.a,{component:"div",children:l.map((function(n){return Object(o.jsxs)(x.a,{className:s.listItems,children:[Object(o.jsx)(k.a,{checked:n.checked,onChange:p,inputProps:{"aria-label":"primary checkbox"},name:n.name}),Object(o.jsx)(O.a,{primary:n.name,className:s.listItemsText})]},n.name)}))}),Object(o.jsx)(_.a,{variant:"contained",color:"primary",className:s.button,onClick:a,disabled:!e,children:"show gitignore!"})]})},S=t(390),T=t(386),P=t(383),D=t(388),M=t(84),N=t.n(M),L=t(392),B=t(387),E=Object(c.a)((function(n){return{root:{display:"inline-block"},title:{textTransform:"capitalize"},closeButton:{position:"absolute",right:n.spacing(1),top:n.spacing(1),color:n.palette.grey[500]},textBox:{padding:n.spacing(2)},actions:{justifyContent:"center"}}})),I=function(n){var e=n.handleClose,t=n.open,i=n.output,a=E();return Object(o.jsxs)(S.a,{onClose:e,open:t,fullWidth:!0,maxWidth:"sm",children:[Object(o.jsxs)(T.a,{className:a.title,children:["gitignore file",Object(o.jsx)(P.a,{"aria-label":"close",className:a.closeButton,onClick:e,children:Object(o.jsx)(N.a,{})})]}),Object(o.jsx)(L.a,{language:"ignore",style:B.a,children:i}),Object(o.jsx)(D.a,{className:a.actions,children:Object(o.jsx)(_.a,{onClick:function(){navigator.clipboard.writeText(i)},variant:"contained",color:"secondary",children:"copy to clipboard"})})]})},F=Object(c.a)((function(n){return{root:{marginLeft:"auto",marginRight:"auto",marginTop:n.spacing(5),width:"60%",textAlign:"center"},title:{textTransform:"capitalize",marginTop:n.spacing(4),paddingBottom:n.spacing(1)},subTitle:{textTransform:"capitalize",color:n.palette.grey[500]}}})),z=function(){var n=F(),e=Object(i.useState)(""),t=Object(y.a)(e,2),a=t[0],s=t[1],r=Object(i.useState)(!1),c=Object(y.a)(r,2),l=c[0],d=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(f.a,{variant:"outlined",className:n.root,children:[Object(o.jsx)(u.a,{variant:"h4",className:n.title,children:"select templates"}),Object(o.jsx)(u.a,{variant:"subtitle1",className:n.subTitle,children:"choose files to ignore from a list of templates"}),Object(o.jsx)(R,{output:a,setOutput:s,openDialog:function(){d(!0)}})]}),Object(o.jsx)(I,{handleClose:function(){d(!1)},open:l,output:a})]})},J=Object(c.a)((function(n){return{root:{paddingBottom:n.spacing(5)}}})),G=function(){var n=J();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:n.root,children:[Object(o.jsx)(b,{}),Object(o.jsx)(z,{})]}),Object(o.jsx)(l.a,{})]})},W=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,394)).then((function(e){var t=e.getCLS,o=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;t(n),o(n),i(n),a(n),s(n)}))};t(353);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(G,{})}),document.getElementById("root")),W()}},[[354,1,2]]]);
//# sourceMappingURL=main.0cec73a8.chunk.js.map