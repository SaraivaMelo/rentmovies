	
	- Criei o projeto com o comando:

		ng new rentmovies

	- Criei o core com o comando

		ng g module core

	- Importei o core.module no app.module, no campo de imports

	- criei o material com o comando 

		ng add @angular/material --skip-confirmation

	- confirguei  o angular material no projeto, que é:

		criar o material module, assim, tudo que for do material a gente importa aqui
		Importar esse module lá no coremodule

	- Instalei o flex-layout com o comando

		npm i -s @angular/flex-layout @angular/cdk

		E importei ele no core.module

	- Instalar o json-server e criar o db

	- Consfigurar o caminho de start do backend no package.json

		 "backend": "json-server --watch ./src/mocks/db.json "

	- Criar o service movies para pegar o dados do backend

		ng g s core/services/movies

	- Criar uma pasta model, dentro de core, e dentro dela, criar o model que vai ser a interface

	- Importar o HttpClientModule dentro do imports do app.module

	- Criar dentro do movies.service.ts o método All e a url


			export class MoviesService {

			  private moviesuRL = 'api/movies'

			  constructor(private http: HttpClient) { }

			  getAll(): Observable<Movie[]>{
			    return this.http.get<Movie[]>(this.moviesuRL)
			  }
			}

	- Criar um arquiv chamado routes.json dentro da pasta mocks, e dentro desse arquivo a gente vai fazer uma configuração para que não der erro na url. A configuração é:

			{
			  "/api/*": "/$1"
			}

		Com isso a gente precisa de mais um detalhe na chamada do run backend

				 "backend": "json-server --watch ./src/mocks/db.json  --routes ./src/mocks/routes.json"


			Outra configuração a ser feita é criar um proxy para que, quando a chamada for para a API e caia como 4200 ele redirecione para 3000

			Deve ser criad um arquivo proxy.conf.json e nele conter:

			 		{
					  "/api": {
					    "target": "http://localhost:3000",
					    "secure": false
					  }
					}

				Agora configurar no angular.json, na sessão de server, em development add

					"proxyConfig": "src/proxy.conf.json"


	- Criar a toolbar. No material module

		import {MatToolbarModule} from '@angular/material/toolbar';
		import {MatIconModule} from '@angular/material/icon';
		import {MatTooltipModule} from '@angular/material/tooltip';
		

			const MODULES = [ CommonModule, MatToolbarModule, MatIconModule , MatTooltipModule]

			assim podemos usar esses items na aplicação

		No html do app.html, cria o toolbar, assim:

			<mat-toolbar>
			    <span>{{ title }}</span>
			    <span fxFlex></span>
			    <button mat-icon-button aria-label="Dashboard">
			      <mat-icon>dashboard</mat-icon>
			    </button>
			    <a mat-button matTooltip="Login">Login</a>
			</mat-toolbar>

	- Criando o app.routing

		ng g module app-routing --flat --module=app
		Com isso sera criado o app-routing.module.ts e já adicionado dentroi d app.modules
	
	- Criada a primeira rota:

		const routes : Routes = [
		  { path: 'dashboard', component: DashboardComponent}
		]

	- Configurado o routerlink para apontar para essa rota, no button da toolbar:

		<button mat-icon-button aria-label="Dashboard" routerLink="/dashboard">
	      <mat-icon>dashboard</mat-icon>
	    </button>

	- Criado o dashboard component e dentro da classe, foi:

		- Criado um atributo movies, do tipo Movie para receber o array de filmes.
		- Adicionado no construtor o moviesServices
		- Criado um método para buscar os movies através do moviesServices
		- Adicionada a chamada do getMovies dentro do ngOnInit()

	 - Criado um  ngFor no dashboardHTML para mostrr os itens  na tela

	  

