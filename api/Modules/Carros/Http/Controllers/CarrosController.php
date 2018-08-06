<?php

namespace Modules\Carros\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Modules\Carros\Entities\Carros;

class CarrosController extends Controller
{
    /**
     * Lista todos modelos encontrados
     * @return JsonResponse com o corpo da resposta e um http status code.
     */
    public function index()
    {
        $obj = new Carros();
        return new JsonResponse($obj->all());
    }

    /**
     * Salva um modelo na base de dados
     * @param  Request  $request Parametros da requisição
     * @return JsonResponse
     */
    public function store(Request $request)
    {

        $obj = new Carros($request->all());
        return new JsonResponse($obj->save(),200);
    }

    /**
     * Atualiza um modelo da base de dados
     * @param  Request  $request Parametros da requisição
     * @return JsonResponse
     */
    public function update(Request $request,$id)
    {

        $obj = Carros::findOrFail($id);
        return new JsonResponse($obj->update($request->all()),200);
    }

    /**
     * Busca um modelo da base de dados pela sua chave primária
     * @param  int $id chave primária do modelo
     * @return JsonResponse
     */
    public function show(Request $request, $id)
    {
        $obj = new Carros();
        return new JsonResponse($obj->find($id));
    }

    /**
     * Apaga um modelo da base de dados pela sua chave primária
     * @param  int $id chave primária do modelo
     * @return JsonResponse
     */
    public function destroy($id)
    {
        try{
            $obj = Carros::findOrFail($id);
            Carros::destroy($id);
            return new JsonResponse(true, 204);
        }catch(ModelNotFoundException $e){
            return new JsonResponse('Registro '.$id.' inexistente!',400);
        }
    }
}
