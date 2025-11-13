window.BENCHMARK_DATA = {
  "lastUpdate": 1763033352943,
  "repoUrl": "https://github.com/openvdb/fvdb-reality-capture",
  "entries": {
    "fvdb-reality-capture Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "7ca7ab7ce06f9d07d97c6db1b04839b8220264e4",
          "message": "typo in instance-type\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-12T05:58:47Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/7ca7ab7ce06f9d07d97c6db1b04839b8220264e4"
        },
        "date": 1762928299482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 3234.547211068627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000101114513384793",
            "extra": "mean: 309.16228292417503 usec\nrounds: 3174"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 2143.8829936680104,
            "unit": "iter/sec",
            "range": "stddev: 0.000010199020901621756",
            "extra": "mean: 466.44336605752954 usec\nrounds: 2139"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 1275.0670634923308,
            "unit": "iter/sec",
            "range": "stddev: 0.000016353840834989747",
            "extra": "mean: 784.2724736854711 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 334.204714972447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004566675154444203",
            "extra": "mean: 2.9921780130553923 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 315.61952161355316,
            "unit": "iter/sec",
            "range": "stddev: 0.00001066051635649777",
            "extra": "mean: 3.16837182594937 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 471.01344677388335,
            "unit": "iter/sec",
            "range": "stddev: 0.00004437478194483419",
            "extra": "mean: 2.1230816377946513 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 194.93164147834958,
            "unit": "iter/sec",
            "range": "stddev: 0.000023569376994848338",
            "extra": "mean: 5.130003484380789 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 68.6509065519083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000735053757063137",
            "extra": "mean: 14.566450032875826 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 196.6407613934972,
            "unit": "iter/sec",
            "range": "stddev: 0.00003676308485518168",
            "extra": "mean: 5.085415622445152 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 294.82207618255734,
            "unit": "iter/sec",
            "range": "stddev: 0.00005705089660535557",
            "extra": "mean: 3.391876256175566 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 121.72471011408113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004279682938546113",
            "extra": "mean: 8.215258833336256 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 52.43365092579775,
            "unit": "iter/sec",
            "range": "stddev: 0.00006558819366492882",
            "extra": "mean: 19.071721734867644 msec\nrounds: 347"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "b575fbe9946005ae731add45e9cb2f63c6cf3606",
          "message": "Remove redundant cleanup that causes automatic micromamba cleanup to fail.\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-12T08:36:29Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/b575fbe9946005ae731add45e9cb2f63c6cf3606"
        },
        "date": 1762937678188,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 3279.1106011113325,
            "unit": "iter/sec",
            "range": "stddev: 0.00000811229002052827",
            "extra": "mean: 304.9607413855108 usec\nrounds: 3105"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 2149.176331595548,
            "unit": "iter/sec",
            "range": "stddev: 0.000008379624769744703",
            "extra": "mean: 465.2945341425755 usec\nrounds: 2138"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 1273.0081703993196,
            "unit": "iter/sec",
            "range": "stddev: 0.000011047451303000629",
            "extra": "mean: 785.5409126606925 usec\nrounds: 1248"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 337.62963090802674,
            "unit": "iter/sec",
            "range": "stddev: 0.000045846372916800326",
            "extra": "mean: 2.961825350786255 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 315.9723012360756,
            "unit": "iter/sec",
            "range": "stddev: 0.000015223258252885577",
            "extra": "mean: 3.1648343734182562 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 475.07759980171153,
            "unit": "iter/sec",
            "range": "stddev: 0.00003938118194694874",
            "extra": "mean: 2.104919281433983 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 195.2232937340445,
            "unit": "iter/sec",
            "range": "stddev: 0.000028106116144498145",
            "extra": "mean: 5.122339557298498 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 68.20132103638768,
            "unit": "iter/sec",
            "range": "stddev: 0.00005978465532499138",
            "extra": "mean: 14.662472585633152 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 196.55749868461555,
            "unit": "iter/sec",
            "range": "stddev: 0.000040135831689005664",
            "extra": "mean: 5.087569829144704 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 299.0085519989907,
            "unit": "iter/sec",
            "range": "stddev: 0.00007359728282874467",
            "extra": "mean: 3.34438594921317 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 120.89781414502134,
            "unit": "iter/sec",
            "range": "stddev: 0.00006461465965934373",
            "extra": "mean: 8.271448140497094 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 51.8772912286475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680352761614751",
            "extra": "mean: 19.27625703494294 msec\nrounds: 372"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "378fa06a84c1a25f805e0c2878085acd299240ab",
          "message": "Add metadata about the commits to the benchmark results stored in gh-pages.\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-13T04:42:06Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/378fa06a84c1a25f805e0c2878085acd299240ab"
        },
        "date": 1763011252828,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 2193.1484997557454,
            "unit": "iter/sec",
            "range": "stddev: 0.000010956360443677634",
            "extra": "mean: 455.9654761687919 usec\nrounds: 2182"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 722.2636879581208,
            "unit": "iter/sec",
            "range": "stddev: 0.000036334032026496074",
            "extra": "mean: 1.3845358927389178 msec\nrounds: 895"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 543.7588555785758,
            "unit": "iter/sec",
            "range": "stddev: 0.000026532603439766447",
            "extra": "mean: 1.8390505087700502 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 173.5539680237477,
            "unit": "iter/sec",
            "range": "stddev: 0.0001145514438320968",
            "extra": "mean: 5.761896494715512 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 111.75223902801866,
            "unit": "iter/sec",
            "range": "stddev: 0.00005120791206133877",
            "extra": "mean: 8.948366571423046 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 130.2899423309274,
            "unit": "iter/sec",
            "range": "stddev: 0.00014811858987764159",
            "extra": "mean: 7.675189520462519 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 63.03326044536887,
            "unit": "iter/sec",
            "range": "stddev: 0.00016736520410947742",
            "extra": "mean: 15.864640238096253 msec\nrounds: 63"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 25.90527899135231,
            "unit": "iter/sec",
            "range": "stddev: 0.00032765509794174466",
            "extra": "mean: 38.6021706361016 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 73.59611482528533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005809008608474554",
            "extra": "mean: 13.587673783785544 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 81.41707638750599,
            "unit": "iter/sec",
            "range": "stddev: 0.00019576048794804656",
            "extra": "mean: 12.282435631076739 msec\nrounds: 103"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 40.269227799521275,
            "unit": "iter/sec",
            "range": "stddev: 0.0003334090298952708",
            "extra": "mean: 24.83285760974756 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 19.2000839289163,
            "unit": "iter/sec",
            "range": "stddev: 0.0008866040916294959",
            "extra": "mean: 52.0831056625721 msec\nrounds: 326"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "378fa06a84c1a25f805e0c2878085acd299240ab",
          "message": "Add metadata about the commits to the benchmark results stored in gh-pages.\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-13T04:42:06Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/378fa06a84c1a25f805e0c2878085acd299240ab"
        },
        "date": 1763015028253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 2167.3713730243535,
            "unit": "iter/sec",
            "range": "stddev: 0.000012875459064279277",
            "extra": "mean: 461.388395383574 usec\nrounds: 2165"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 712.1688105412595,
            "unit": "iter/sec",
            "range": "stddev: 0.000044645874074910565",
            "extra": "mean: 1.4041614645269067 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 534.9952561712369,
            "unit": "iter/sec",
            "range": "stddev: 0.000050134808878047264",
            "extra": "mean: 1.8691754524266817 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 168.99464582497632,
            "unit": "iter/sec",
            "range": "stddev: 0.00010614921610270869",
            "extra": "mean: 5.917347233803347 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 111.81700991573169,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145428132816923",
            "extra": "mean: 8.94318315928522 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 128.5845361320006,
            "unit": "iter/sec",
            "range": "stddev: 0.0001345366361838491",
            "extra": "mean: 7.776984932102826 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 62.33381935714353,
            "unit": "iter/sec",
            "range": "stddev: 0.00017108453179353337",
            "extra": "mean: 16.042655661294702 msec\nrounds: 62"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 25.559341055148373,
            "unit": "iter/sec",
            "range": "stddev: 0.0003464032401874929",
            "extra": "mean: 39.12463931845269 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 73.43885182386308,
            "unit": "iter/sec",
            "range": "stddev: 0.00007147562791872052",
            "extra": "mean: 13.6167706216107 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 80.13484576463344,
            "unit": "iter/sec",
            "range": "stddev: 0.00019681014877335318",
            "extra": "mean: 12.478965803929182 msec\nrounds: 102"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 39.88220850027963,
            "unit": "iter/sec",
            "range": "stddev: 0.0003089766678204085",
            "extra": "mean: 25.073837121958494 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 18.933646411027336,
            "unit": "iter/sec",
            "range": "stddev: 0.0007248529919357503",
            "extra": "mean: 52.8160280535069 msec\nrounds: 299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "c1b51e4343cb4302243275e37a1e6ac7c04eb1f7",
          "message": "Always store commit hashes even on regressions\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-13T06:00:46Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/c1b51e4343cb4302243275e37a1e6ac7c04eb1f7"
        },
        "date": 1763028413397,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 2126.6748412850616,
            "unit": "iter/sec",
            "range": "stddev: 0.000012315199245553057",
            "extra": "mean: 470.21762828385243 usec\nrounds: 2171"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 687.8790615166944,
            "unit": "iter/sec",
            "range": "stddev: 0.00003718621845966967",
            "extra": "mean: 1.453743915093323 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 516.8870725022856,
            "unit": "iter/sec",
            "range": "stddev: 0.00002956529717595391",
            "extra": "mean: 1.9346585612190528 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 167.6876929156801,
            "unit": "iter/sec",
            "range": "stddev: 0.00012098397030021018",
            "extra": "mean: 5.963466862787832 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 111.5701917328322,
            "unit": "iter/sec",
            "range": "stddev: 0.000047327086709189216",
            "extra": "mean: 8.962967477860182 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 124.18145600453435,
            "unit": "iter/sec",
            "range": "stddev: 0.0001341783060006214",
            "extra": "mean: 8.052732124218982 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 61.2747957677569,
            "unit": "iter/sec",
            "range": "stddev: 0.0001593275467411948",
            "extra": "mean: 16.31992383606124 msec\nrounds: 61"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 25.0670215340578,
            "unit": "iter/sec",
            "range": "stddev: 0.00021094910755268214",
            "extra": "mean: 39.89305225757796 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 73.37861073421591,
            "unit": "iter/sec",
            "range": "stddev: 0.00007310741531352126",
            "extra": "mean: 13.627949480020712 msec\nrounds: 75"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 77.68720774406617,
            "unit": "iter/sec",
            "range": "stddev: 0.00016754664278744973",
            "extra": "mean: 12.872132092768917 msec\nrounds: 97"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 39.18621271040357,
            "unit": "iter/sec",
            "range": "stddev: 0.00029136869801913443",
            "extra": "mean: 25.51917959998491 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 18.62138523114063,
            "unit": "iter/sec",
            "range": "stddev: 0.0007302480433107493",
            "extra": "mean: 53.701697676480876 msec\nrounds: 306"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "d9e492579268ee26cad0e4dde0655e19e7408289",
          "message": "Fix authentication\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-13T10:31:45Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/d9e492579268ee26cad0e4dde0655e19e7408289"
        },
        "date": 1763031252491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 2131.696412268033,
            "unit": "iter/sec",
            "range": "stddev: 0.00001368572900066262",
            "extra": "mean: 469.10995123177184 usec\nrounds: 2153"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 699.0245957551489,
            "unit": "iter/sec",
            "range": "stddev: 0.000042285555507524873",
            "extra": "mean: 1.4305648271499096 msec\nrounds: 862"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 522.9795505182697,
            "unit": "iter/sec",
            "range": "stddev: 0.000029638580516190345",
            "extra": "mean: 1.9121206536833149 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 167.72976111675894,
            "unit": "iter/sec",
            "range": "stddev: 0.00010566849554707942",
            "extra": "mean: 5.961971169230287 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 111.59378539587209,
            "unit": "iter/sec",
            "range": "stddev: 0.000047760930173127416",
            "extra": "mean: 8.961072486721026 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 125.99528188662006,
            "unit": "iter/sec",
            "range": "stddev: 0.0002826369244190096",
            "extra": "mean: 7.936805132908663 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 61.730727971929404,
            "unit": "iter/sec",
            "range": "stddev: 0.00013050589930763338",
            "extra": "mean: 16.19938777418479 msec\nrounds: 62"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 25.291239816659754,
            "unit": "iter/sec",
            "range": "stddev: 0.00026444196228139175",
            "extra": "mean: 39.53938230190216 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 73.35139622036235,
            "unit": "iter/sec",
            "range": "stddev: 0.00007730806095104339",
            "extra": "mean: 13.63300566216625 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 78.69947251766249,
            "unit": "iter/sec",
            "range": "stddev: 0.00020596550422266125",
            "extra": "mean: 12.706565469998168 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 39.45059416769466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002897315096405076",
            "extra": "mean: 25.348160682935443 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 18.74721302646335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007561109931055827",
            "extra": "mean: 53.34126190321791 msec\nrounds: 310"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "f9a38c8bbadbc057a361a225a2dbdcf0ca0e4cc3",
          "message": "Don't stop runners that never started\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-13T11:03:07Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/f9a38c8bbadbc057a361a225a2dbdcf0ca0e4cc3"
        },
        "date": 1763033352512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 2166.230467667533,
            "unit": "iter/sec",
            "range": "stddev: 0.000010500360915986878",
            "extra": "mean: 461.6313983787422 usec\nrounds: 2101"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 717.0255081581087,
            "unit": "iter/sec",
            "range": "stddev: 0.00003882705215978483",
            "extra": "mean: 1.3946505230599042 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 539.4081046487904,
            "unit": "iter/sec",
            "range": "stddev: 0.000020894728687121172",
            "extra": "mean: 1.8538838986320048 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 169.96441437396166,
            "unit": "iter/sec",
            "range": "stddev: 0.00012176655399768144",
            "extra": "mean: 5.883584535523801 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 111.83522633915302,
            "unit": "iter/sec",
            "range": "stddev: 0.000049478271673541326",
            "extra": "mean: 8.941726437494626 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 128.88722608012876,
            "unit": "iter/sec",
            "range": "stddev: 0.00014683219943404795",
            "extra": "mean: 7.758720785706903 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 62.714725701601374,
            "unit": "iter/sec",
            "range": "stddev: 0.0001644215832890907",
            "extra": "mean: 15.945218428571804 msec\nrounds: 63"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 25.719094045770262,
            "unit": "iter/sec",
            "range": "stddev: 0.00032547465515903967",
            "extra": "mean: 38.881618389060606 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 73.48314272126278,
            "unit": "iter/sec",
            "range": "stddev: 0.00007242273720283074",
            "extra": "mean: 13.60856331081556 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 80.71411177096641,
            "unit": "iter/sec",
            "range": "stddev: 0.00018243919630756217",
            "extra": "mean: 12.389407230765178 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 40.04994681616932,
            "unit": "iter/sec",
            "range": "stddev: 0.00035500050139268107",
            "extra": "mean: 24.96882217072686 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 19.095597209776177,
            "unit": "iter/sec",
            "range": "stddev: 0.0008632642527018711",
            "extra": "mean: 52.36809244635932 msec\nrounds: 289"
          }
        ]
      }
    ]
  }
}