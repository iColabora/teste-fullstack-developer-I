const rows = [
  {
    TAREFA: 'Escalonamento FUP',
    VENCIDO: 0,
    D0: 0,
    D1: 0,
    D2: 0,
    D3: 0,
    D4: 0,
    D5: 0,
    TOTAL: 0,
    STT: 'processo',
    DRILLDOWN:
        []
  },
  {
    TAREFA: 'Fila - Aguardando tratativa',
    VENCIDO: 0,
    D0: 0,
    D1: 0,
    D2: 0,
    D3: 1,
    D4: 0,
    D5: 0,
    TOTAL: 1,
    STT: 'processo',
    DRILLDOWN:
        [
          {
            INSTANCIA: 348279141,
            STATUS: 'Fila - Aguardando tratativa',
            PROTOCOLO: 'CC2023410563708',
            REGUA: 'D3',
            inicio: '10/04/2023 12:42:35',
            SLA: '13/04/2023 12:42:36',
            TIPO_SOLICITACAO: '-',
            operador: ''
          }
        ]
  },
  {
    TAREFA: 'Em cadastro',
    VENCIDO: 0,
    D0: 0,
    D1: 0,
    D2: 0,
    D3: 0,
    D4: 0,
    D5: 0,
    TOTAL: 0,
    STT: 'processo',
    DRILLDOWN:
        []
  },
  {
    TAREFA: 'Em blindagem',
    VENCIDO: 0,
    D0: 0,
    D1: 0,
    D2: 0,
    D3: 0,
    D4: 0,
    D5: 0,
    TOTAL: 0,
    STT: 'processo',
    DRILLDOWN:
        []
  },
  {
    TAREFA: 'Em tratativa',
    VENCIDO: 3,
    D0: 0,
    D1: 0,
    D2: 0,
    D3: 0,
    D4: 0,
    D5: 0,
    TOTAL: 3,
    STT: 'processo',
    DRILLDOWN:
        [
          {
            INSTANCIA: 342539833,
            STATUS: 'Em tratativa',
            PROTOCOLO: 'CC2023327563509',
            REGUA: 'VENCIDO',
            inicio: '27/03/2023 14:16:18',
            SLA: '30/03/2023 14:16:19',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 344479939,
            STATUS: 'Em tratativa',
            PROTOCOLO: 'CC2023330563584',
            REGUA: 'VENCIDO',
            inicio: '30/03/2023 14:45:27',
            SLA: '04/04/2023 14:45:28',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 345412331,
            STATUS: 'Em tratativa',
            PROTOCOLO: 'CC202341563614',
            REGUA: 'VENCIDO',
            inicio: '01/04/2023 14:23:15',
            SLA: '05/04/2023 14:23:16',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          }
        ]
  },
  {
    TAREFA: 'Aguardando FUP',
    VENCIDO: 75,
    D0: 5,
    D1: 14,
    D2: 9,
    D3: 5,
    D4: 0,
    D5: 0,
    TOTAL: 108,
    STT: 'processo',
    DRILLDOWN:
        [
          {
            INSTANCIA: 338049829,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023317563345',
            REGUA: 'VENCIDO',
            inicio: '17/03/2023 15:32:35',
            SLA: '22/03/2023 15:54:22',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 345979292,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563627',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 16:07:15',
            SLA: '06/04/2023 16:48:13',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 346031770,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563629',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 16:42:58',
            SLA: '06/04/2023 16:43:00',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 340141354,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023322563419',
            REGUA: 'VENCIDO',
            inicio: '22/03/2023 13:33:59',
            SLA: '27/03/2023 13:34:00',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 345907228,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563625',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 14:59:40',
            SLA: '06/04/2023 15:43:45',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 343539819,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023328563543',
            REGUA: 'VENCIDO',
            inicio: '28/03/2023 18:38:22',
            SLA: '31/03/2023 18:43:45',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 339286416,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023321563386',
            REGUA: 'VENCIDO',
            inicio: '21/03/2023 10:30:46',
            SLA: '24/03/2023 10:30:47',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 346818639,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202345563659',
            REGUA: 'D0',
            inicio: '05/04/2023 10:37:37',
            SLA: '10/04/2023 10:44:26',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 346146502,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563639',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 18:35:37',
            SLA: '06/04/2023 18:35:38',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 343550985,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023328563545',
            REGUA: 'VENCIDO',
            inicio: '28/03/2023 19:19:01',
            SLA: '31/03/2023 19:21:31',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 346083290,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563635',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 17:26:11',
            SLA: '06/04/2023 17:29:18',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 346343224,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202344563647',
            REGUA: 'VENCIDO',
            inicio: '04/04/2023 11:31:28',
            SLA: '07/04/2023 11:31:30',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 346132333,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563637',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 18:08:45',
            SLA: '06/04/2023 18:08:46',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 346063623,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563634',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 17:11:03',
            SLA: '06/04/2023 17:14:18',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 347156018,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202345563666',
            REGUA: 'D0',
            inicio: '05/04/2023 17:27:20',
            SLA: '10/04/2023 18:02:45',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 347426775,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563670',
            REGUA: 'D1',
            inicio: '06/04/2023 12:17:43',
            SLA: '11/04/2023 12:17:44',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 347343278,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563669',
            REGUA: 'D1',
            inicio: '06/04/2023 10:27:50',
            SLA: '11/04/2023 10:27:51',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 342075007,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023325563495',
            REGUA: 'VENCIDO',
            inicio: '25/03/2023 17:36:42',
            SLA: '29/03/2023 17:36:43',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 336418419,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023314563294',
            REGUA: 'VENCIDO',
            inicio: '14/03/2023 17:49:18',
            SLA: '17/03/2023 17:51:13',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 342254189,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023327563498',
            REGUA: 'VENCIDO',
            inicio: '27/03/2023 09:56:09',
            SLA: '30/03/2023 09:56:10',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 342442181,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023327563503',
            REGUA: 'VENCIDO',
            inicio: '27/03/2023 12:20:14',
            SLA: '30/03/2023 12:20:15',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 343307089,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023328563534',
            REGUA: 'VENCIDO',
            inicio: '28/03/2023 14:55:47',
            SLA: '31/03/2023 14:55:48',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 343557129,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023328563547',
            REGUA: 'VENCIDO',
            inicio: '28/03/2023 20:28:09',
            SLA: '31/03/2023 20:28:10',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 342466809,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023327563504',
            REGUA: 'VENCIDO',
            inicio: '27/03/2023 12:35:28',
            SLA: '30/03/2023 12:35:29',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 344984369,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023331563598',
            REGUA: 'VENCIDO',
            inicio: '31/03/2023 13:19:45',
            SLA: '05/04/2023 13:25:12',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 347631623,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563680',
            REGUA: 'D1',
            inicio: '06/04/2023 16:21:51',
            SLA: '11/04/2023 16:21:52',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 345434387,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202341563616',
            REGUA: 'VENCIDO',
            inicio: '01/04/2023 18:36:00',
            SLA: '05/04/2023 18:36:01',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 346138436,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563638',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 18:16:33',
            SLA: '06/04/2023 18:16:34',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 339568964,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023321563392',
            REGUA: 'VENCIDO',
            inicio: '21/03/2023 15:29:16',
            SLA: '24/03/2023 15:33:55',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 347722168,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563685',
            REGUA: 'D1',
            inicio: '06/04/2023 18:00:11',
            SLA: '11/04/2023 18:00:12',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 340122900,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023322563418',
            REGUA: 'VENCIDO',
            inicio: '22/03/2023 12:39:44',
            SLA: '27/03/2023 12:39:45',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 342785131,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023327563516',
            REGUA: 'VENCIDO',
            inicio: '27/03/2023 17:36:52',
            SLA: '30/03/2023 17:36:53',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 347640206,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563681',
            REGUA: 'D1',
            inicio: '06/04/2023 16:26:20',
            SLA: '11/04/2023 16:28:55',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 346021413,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563628',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 16:31:03',
            SLA: '06/04/2023 16:31:05',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 344907514,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023331563597',
            REGUA: 'VENCIDO',
            inicio: '31/03/2023 11:52:49',
            SLA: '05/04/2023 11:52:50',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 343856193,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023329563558',
            REGUA: 'VENCIDO',
            inicio: '29/03/2023 12:56:30',
            SLA: '03/04/2023 13:05:55',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 345899759,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563624',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 14:54:55',
            SLA: '06/04/2023 14:59:47',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 345926364,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563626',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 15:13:28',
            SLA: '06/04/2023 15:13:30',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 344794915,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023331563594',
            REGUA: 'VENCIDO',
            inicio: '31/03/2023 09:40:47',
            SLA: '05/04/2023 09:50:37',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 346051695,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563632',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 17:04:06',
            SLA: '06/04/2023 17:04:08',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 345266151,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023331563608',
            REGUA: 'VENCIDO',
            inicio: '31/03/2023 19:19:19',
            SLA: '05/04/2023 19:46:56',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 345422219,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202341563615',
            REGUA: 'VENCIDO',
            inicio: '01/04/2023 15:27:50',
            SLA: '05/04/2023 15:27:51',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 343808120,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023329563553',
            REGUA: 'VENCIDO',
            inicio: '29/03/2023 12:10:50',
            SLA: '03/04/2023 12:10:51',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 347215112,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202345563668',
            REGUA: 'D0',
            inicio: '05/04/2023 20:06:52',
            SLA: '10/04/2023 20:08:28',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 340327210,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023322563428',
            REGUA: 'VENCIDO',
            inicio: '22/03/2023 17:06:37',
            SLA: '27/03/2023 17:42:58',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 347756390,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563687',
            REGUA: 'D1',
            inicio: '06/04/2023 18:51:36',
            SLA: '11/04/2023 18:51:37',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 346306200,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202344563644',
            REGUA: 'VENCIDO',
            inicio: '04/04/2023 10:55:02',
            SLA: '07/04/2023 10:55:03',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 347735522,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563686',
            REGUA: 'D1',
            inicio: '06/04/2023 18:04:49',
            SLA: '11/04/2023 18:04:50',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 347888381,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202348563693',
            REGUA: 'D2',
            inicio: '08/04/2023 10:38:54',
            SLA: '12/04/2023 10:44:01',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 347815424,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202347563689',
            REGUA: 'D2',
            inicio: '07/04/2023 18:30:36',
            SLA: '12/04/2023 18:30:37',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 347884125,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202348563691',
            REGUA: 'D2',
            inicio: '08/04/2023 10:26:34',
            SLA: '12/04/2023 10:26:35',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 347924996,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202348563698',
            REGUA: 'D2',
            inicio: '08/04/2023 15:05:22',
            SLA: '12/04/2023 15:08:04',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 347926092,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202348563699',
            REGUA: 'D2',
            inicio: '08/04/2023 15:32:58',
            SLA: '12/04/2023 15:35:50',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 339926993,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023322563411',
            REGUA: 'VENCIDO',
            inicio: '22/03/2023 10:15:27',
            SLA: '27/03/2023 10:30:06',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 346044294,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563631',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 16:50:05',
            SLA: '06/04/2023 17:16:38',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 346541651,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202344563652',
            REGUA: 'VENCIDO',
            inicio: '04/04/2023 15:47:24',
            SLA: '07/04/2023 15:52:28',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 337341329,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023316563319',
            REGUA: 'VENCIDO',
            inicio: '16/03/2023 13:44:46',
            SLA: '21/03/2023 13:44:47',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 347155622,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202345563665',
            REGUA: 'D0',
            inicio: '05/04/2023 17:26:06',
            SLA: '10/04/2023 17:26:07',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 339340736,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023321563387',
            REGUA: 'VENCIDO',
            inicio: '21/03/2023 11:22:21',
            SLA: '24/03/2023 11:50:03',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 347678344,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563682',
            REGUA: 'D1',
            inicio: '06/04/2023 17:14:04',
            SLA: '11/04/2023 17:14:05',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 341893017,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023324563479',
            REGUA: 'VENCIDO',
            inicio: '24/03/2023 19:52:03',
            SLA: '29/03/2023 19:52:04',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 342027030,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023325563490',
            REGUA: 'VENCIDO',
            inicio: '25/03/2023 14:00:58',
            SLA: '29/03/2023 14:01:00',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 347764886,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202347563688',
            REGUA: 'D2',
            inicio: '07/04/2023 14:46:50',
            SLA: '12/04/2023 14:46:51',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 344112737,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023329563570',
            REGUA: 'VENCIDO',
            inicio: '29/03/2023 17:59:53',
            SLA: '03/04/2023 17:59:54',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 340043985,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023322563415',
            REGUA: 'VENCIDO',
            inicio: '22/03/2023 11:41:15',
            SLA: '27/03/2023 11:54:53',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 342517117,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023327563508',
            REGUA: 'VENCIDO',
            inicio: '27/03/2023 13:47:14',
            SLA: '30/03/2023 13:47:15',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 348092983,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023410563703',
            REGUA: 'D3',
            inicio: '10/04/2023 09:52:02',
            SLA: '13/04/2023 11:06:50',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 341964718,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023325563481',
            REGUA: 'VENCIDO',
            inicio: '25/03/2023 10:20:55',
            SLA: '29/03/2023 10:36:40',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 343678231,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023329563549',
            REGUA: 'VENCIDO',
            inicio: '29/03/2023 09:54:15',
            SLA: '03/04/2023 10:17:14',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 345336295,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202341563610',
            REGUA: 'VENCIDO',
            inicio: '01/04/2023 10:09:14',
            SLA: '05/04/2023 10:09:15',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 346381819,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202344563648',
            REGUA: 'VENCIDO',
            inicio: '04/04/2023 12:06:32',
            SLA: '07/04/2023 12:08:37',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 347555132,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563674',
            REGUA: 'D1',
            inicio: '06/04/2023 14:53:38',
            SLA: '11/04/2023 15:04:29',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 343450976,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023328563540',
            REGUA: 'VENCIDO',
            inicio: '28/03/2023 17:03:11',
            SLA: '31/03/2023 17:03:12',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 347540798,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563673',
            REGUA: 'D1',
            inicio: '06/04/2023 14:33:52',
            SLA: '11/04/2023 14:43:49',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 343330709,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023328563536',
            REGUA: 'VENCIDO',
            inicio: '28/03/2023 15:13:23',
            SLA: '31/03/2023 15:42:40',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 346084587,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563636',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 17:29:50',
            SLA: '06/04/2023 17:29:52',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 346458633,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202344563649',
            REGUA: 'VENCIDO',
            inicio: '04/04/2023 14:11:40',
            SLA: '07/04/2023 14:11:41',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 342066670,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023325563493',
            REGUA: 'VENCIDO',
            inicio: '25/03/2023 15:40:23',
            SLA: '29/03/2023 15:49:26',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 347117429,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202345563663',
            REGUA: 'D0',
            inicio: '05/04/2023 16:51:50',
            SLA: '10/04/2023 16:51:52',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 345699110,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563618',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 11:18:59',
            SLA: '06/04/2023 11:19:00',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 347697333,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563684',
            REGUA: 'D1',
            inicio: '06/04/2023 17:31:32',
            SLA: '11/04/2023 17:35:49',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 347626627,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563679',
            REGUA: 'D1',
            inicio: '06/04/2023 16:11:36',
            SLA: '11/04/2023 16:25:31',
            TIPO_SOLICITACAO: '-',
            operador: 'DANIELA.SOUZA'
          },
          {
            INSTANCIA: 346674690,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202344563654',
            REGUA: 'VENCIDO',
            inicio: '04/04/2023 19:10:22',
            SLA: '07/04/2023 19:10:24',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 338067733,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023317563346',
            REGUA: 'VENCIDO',
            inicio: '17/03/2023 15:42:41',
            SLA: '22/03/2023 15:42:42',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 346052225,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563633',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 17:05:22',
            SLA: '06/04/2023 17:05:24',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 348195522,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023410563704',
            REGUA: 'D3',
            inicio: '10/04/2023 11:26:04',
            SLA: '13/04/2023 11:35:33',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 339745219,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023321563399',
            REGUA: 'VENCIDO',
            inicio: '21/03/2023 18:02:21',
            SLA: '24/03/2023 18:04:57',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 327762397,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023222562931',
            REGUA: 'VENCIDO',
            inicio: '22/02/2023 09:28:38',
            SLA: '27/02/2023 09:43:20',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 347932786,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202348563701',
            REGUA: 'D2',
            inicio: '08/04/2023 17:49:07',
            SLA: '12/04/2023 17:49:08',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 347577219,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563676',
            REGUA: 'D1',
            inicio: '06/04/2023 15:30:07',
            SLA: '11/04/2023 15:30:09',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 341757516,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023324563474',
            REGUA: 'VENCIDO',
            inicio: '24/03/2023 16:23:17',
            SLA: '29/03/2023 16:25:21',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 347909092,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202348563695',
            REGUA: 'D2',
            inicio: '08/04/2023 13:30:24',
            SLA: '12/04/2023 13:30:25',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 343809394,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023329563554',
            REGUA: 'VENCIDO',
            inicio: '29/03/2023 12:12:47',
            SLA: '03/04/2023 12:19:46',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 347501142,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202346563671',
            REGUA: 'D1',
            inicio: '06/04/2023 13:32:43',
            SLA: '11/04/2023 13:34:27',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 344309850,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023330563575',
            REGUA: 'VENCIDO',
            inicio: '30/03/2023 10:45:00',
            SLA: '04/04/2023 10:46:19',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 346614434,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202344563653',
            REGUA: 'VENCIDO',
            inicio: '04/04/2023 17:22:35',
            SLA: '07/04/2023 17:22:37',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 340209479,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023322563421',
            REGUA: 'VENCIDO',
            inicio: '22/03/2023 15:03:58',
            SLA: '27/03/2023 15:18:20',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 346043252,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202343563630',
            REGUA: 'VENCIDO',
            inicio: '03/04/2023 16:48:01',
            SLA: '06/04/2023 16:48:02',
            TIPO_SOLICITACAO: '-',
            operador: 'RONALDO.VITAL'
          },
          {
            INSTANCIA: 339772042,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023321563402',
            REGUA: 'VENCIDO',
            inicio: '21/03/2023 19:07:43',
            SLA: '24/03/2023 19:11:10',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 344693823,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023330563592',
            REGUA: 'VENCIDO',
            inicio: '30/03/2023 19:28:07',
            SLA: '04/04/2023 19:29:58',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 348197259,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023410563705',
            REGUA: 'D3',
            inicio: '10/04/2023 11:30:45',
            SLA: '13/04/2023 11:30:46',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 345087614,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023331563603',
            REGUA: 'VENCIDO',
            inicio: '31/03/2023 15:26:20',
            SLA: '05/04/2023 15:26:21',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 345160418,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023331563606',
            REGUA: 'VENCIDO',
            inicio: '31/03/2023 16:38:47',
            SLA: '05/04/2023 16:38:49',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 340398052,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023322563432',
            REGUA: 'VENCIDO',
            inicio: '22/03/2023 18:27:33',
            SLA: '27/03/2023 18:29:14',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 343874940,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023329563560',
            REGUA: 'VENCIDO',
            inicio: '29/03/2023 13:20:41',
            SLA: '03/04/2023 13:24:08',
            TIPO_SOLICITACAO: '-',
            operador: 'LEONARDO.FCAMARGO'
          },
          {
            INSTANCIA: 348271676,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023410563707',
            REGUA: 'D3',
            inicio: '10/04/2023 12:29:19',
            SLA: '13/04/2023 12:52:32',
            TIPO_SOLICITACAO: '-',
            operador: 'THAYNA.SILVA'
          },
          {
            INSTANCIA: 348259593,
            STATUS: 'FUP',
            PROTOCOLO: 'CC2023410563706',
            REGUA: 'D3',
            inicio: '10/04/2023 12:24:04',
            SLA: '13/04/2023 12:26:45',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          },
          {
            INSTANCIA: 347880245,
            STATUS: 'FUP',
            PROTOCOLO: 'CC202348563690',
            REGUA: 'D2',
            inicio: '08/04/2023 09:54:53',
            SLA: '12/04/2023 09:56:42',
            TIPO_SOLICITACAO: '-',
            operador: 'LARISSA.NAPOLI'
          }
        ]
  },
  {
    TAREFA: 'Total',
    VENCIDO: 78,
    D0: 5,
    D1: 14,
    D2: 9,
    D3: 6,
    D4: 0,
    D5: 0,
    TOTAL: 112,
    STT: 'total',
    DRILLDOWN:
        []
  }
]
export default rows
